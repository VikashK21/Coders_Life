require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {User} = require("../config/db.config")


passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    }).catch(err => {
        done(err, false)
    })
})


passport.use(
    new GoogleStrategy({
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
        callbackURL: "/auth/google/redirect"
    }, (accessToken, refreshToken, profile, done) => {
        
        User.findOne({googleId: profile.id})
        .then((currentUser) => {
            if(currentUser) {
                console.log("saved data:"+currentUser)
                done(null, currentUser)
            }
            else {
                User({
                    username: profile.displayName,
                    googleId: profile.id,
                    thumbnail: profile._json.picture
                })
                .save() 
                .then(newUser => {
                    console.log("saved successful:"+newUser);
                    done(null, newUser)
                })
                .catch( err => {
                    console.log(err);
                    done(err, false)
                })
            }
        })
        .catch(err => {
            console.log(err);
            done(err, false)
        })
    }
))

