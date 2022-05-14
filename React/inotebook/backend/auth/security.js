const jwt = require('jsonwebtoken');
const secret_key = '8b2beb7391e639fad72d22bd57dca3cefadf9379d0adac7fabb9e5e9d1e7aedbafd3c999bf2c7909701d5d0aa992dce677c8271559952d0d0f3b7f0dd1345d7a'
// console.log((require('crypto')).randomBytes(64).toString('hex'))



const authenticationToken = (data) => {
    const ID = `${data._id}`;
    return jwt.sign(ID, secret_key);
}

const authorizationToken = (req, res, next) => {
    if (req.headers.cookie) {
        const token = req.headers.cookie.split('=')[1];
        const decode = jwt.verify(token, secret_key);
        req.userID = decode;
        next()
    }
    else {
        next(res.status(403).json({
            message: "Not yet Logged In!!"
        }))
    }
}

module.exports = {authenticationToken, authorizationToken}