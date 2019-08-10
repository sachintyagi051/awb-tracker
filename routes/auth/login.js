const jwt = require('jsonwebtoken');

const login = require('../../models/users');

const config = require('../configure/config');

module.exports = (req, res) => {
    if (req.body.Username && req.body.Password) {
        login.findOne({ Username: req.body.Username }, (err, data) => {
            if (err) {
                res.json({
                    error: err
                })
            }
            else if (data == null) {
                res.json({
                    success: false,
                    msg: "Please register first"
                })
            } else if (data.Password === req.body.Password) {
                let token = jwt.sign({ Username: req.body.Username }, config.secret, {
                    expiresIn: 86400
                })
                res.json({
                    success: true,
                    token: token
                })
            }
            else {
                res.json({
                    success: false
                })
            }
        })
    }
}