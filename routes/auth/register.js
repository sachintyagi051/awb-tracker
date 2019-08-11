const userModel = require('../../models/users');

module.exports = (req, res) => {
    if (!req.body.name && !req.body.email && !req.body.password) {
        res.json({
            success: false,
            msg: 'Please enter all details.'
        })
    }
    else {
        new userModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).save((err, data) => {
            if (err) {
                if (err.message.includes('E11000')) {
                    res.json({
                        success: false,
                        msg: "Email already exists."
                    })
                } else {
                    res.json({
                        success: false,
                        msg: err.message
                    })
                }
            } else {
                res.json({
                    success: true,
                    msg: 'User registered',
                })
            }
        })
    }
} 