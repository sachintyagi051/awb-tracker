const registration = require('../../models/users');

module.exports = (req, res) => {
    if (!req.body.Username && !req.body.Password) {
        res.json({
            success: false,
            msg: 'Please enter all details.'
        })
    }
    else {
        new registration({
            Username: req.body.Username,
            Password: req.body.Password
        }).save((err, data) => {
            if (err) {
                res.json({
                    success: false
                })
            } else {
                res.json({
                    success: true,
                    msg: 'User registered',
                })
            }
        })
    }
} 