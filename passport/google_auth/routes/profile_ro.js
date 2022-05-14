const router = require('express').Router();
// const express = require("express")


const authCheck = (req, res, next) => {
    if(!req.user) {
        res.redirect('auth/login');
    }else {
        next();
    }
}

router.get('/',authCheck, (req, res) => {
    console.log(req.user.username)
    res.render('profile')
})

module.exports = router;