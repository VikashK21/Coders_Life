require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 2022;
const router = require('./routes/router')
const profile = require('./routes/profile_ro')
const { connectMongoose } = require('./config/db.config');
const passportSetup = require('./config/pass_setup');
const passport = require('passport');
const cookieSession = require('cookie-session');


connectMongoose();


app.set('view engine', 'ejs');


app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: process.env.secret_key
}))
app.use(passport.initialize())
app.use(passport.session());
app.use('/auth', router);
app.use('/profile', profile);



app.get('/home', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`Listening at the port ${port}`);
})
