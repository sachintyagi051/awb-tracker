const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {
    if (!req.headers.token) {
        res.json({
            success: false,
            msg: "Please login first"
        })
    } else {
        jwt.verify(req.headers.token, req.app.get('secretKey'), (err, data) => {
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

module.exports = verify;