const router = require('express').Router();
const passport = require('passport');


router.get("/login", (req, res)=>{
    res.render("login")
})
router.get('/google',passport.authenticate('google', {scope: ['profile']}))

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // console.log("hey")
    // console.log(req.user)
    // res.redirect('/profile')
    res.send(req.user)
})



module.exports = router;