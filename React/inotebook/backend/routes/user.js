const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const { authenticationToken } = require('../auth/security');


router.get('/', (req, res) => {
    res.send('This is the auth file.')
    console.log('vikash')
})

router.post('/signup',[
    body('name', 'Your name should contain atleast 3 characters.!!').isLength({min:3}),
    body('email', 'Your email is invalid!!').isEmail(),
    body('password', 'Your password should be strong!!').isLength({min:8})
], async(req, res) => {
    // validation helps to identify the invalid input items taken req.
    const errors = validationResult(req);
    console.log(errors);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });

    }
    try {
        const result = await User.findOne({email: req.body.email});
        if (result) {
            return res.status(400).send('This account already exist!!')
        }
        // const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const user = await User.create(req.body);
        res.json(user)
    
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Some error occured!!')
        
    }
})

router.post('/login', [
    body('email', 'Your email is invalid!!').isEmail(),
    body('password', 'Password should not be blank!!').exists()
], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const result = await User.findOne({ email: req.body.email })
        if (!result) {
            return res.status(400).send('Please try to login with correct credentials!!');
        }
        const passwordCompare = await bcrypt.compare(req.body.password, result.password)
        if (!passwordCompare) {
            return res.status(400).send('Please try to login with correct credentials!!');
        }
        const token = await authenticationToken(req.body);
        res.cookie('key', token).send('You are successfully loggedIn.')
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Some error occured!!')
    }
})
module.exports = router; 

