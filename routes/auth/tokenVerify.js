const jwt = require('jsonwebtoken');
const config = require('../configure/config')

module.exports = (req, res, next) => {
    if (!req.headers.token) {
        res.json({
            success: false,
            msg: "Please login first"
        })
    } else {
        jwt.verify(req.headers.token, config.secret, (err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Unauthorised request"
                })
            } else {
                req.decoded = data;
                next();
            }
        })
    }
}