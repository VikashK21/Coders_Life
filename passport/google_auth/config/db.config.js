const mongoose = require('mongoose');

exports.connectMongoose = () => {
    mongoose.connect('mongodb://localhost:27017/passport').then( d => {
        // console.log(d);
        console.log('connected');
    }).catch( err => {
        console.log(err);
    })
}


const userSchema = new mongoose.Schema({
    username: String,
    googleId: String,
    thumbnail: String
})

exports.User = mongoose.model("GoogleUser", userSchema);
