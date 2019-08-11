const jwt = require('jsonwebtoken');

const userModel = require('../../models/users');

const login = (req, res) => {
    if (!req.body.email && !req.body.password) {
        res.json({
            success: false,
            msg: 'Please send all details.'
        })
    } else {
        userModel.findOne({ email: req.body.email }, (err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: 'Something went wrong, please try again later.'
                });
            } else if (!data || data == null) {
                res.json({
                    success: false,
                    msg: 'Please register first.'
                })
            } else {
                if (data.password == req.body.password) {
                    let token = jwt.sign({ name: data.name, email: data.email }, req.app.get('secretKey'), {
                        expiresIn: 86400
                    })
                    res.json({
                        success: true,
                        msg: 'Successfully Logged In',
                        token: token
                    })
                } else {
                    res.json({
                        success: false,
                        msg: 'Wrong Password.'
                    })
                }
            }
        })
    }
}

module.exports = login;