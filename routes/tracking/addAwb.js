const trackModel = require('../../models/tracking');

const addData = (req, res) => {
    if (!req.body.awbNo) {
        res.json({
            success: false,
            msg: "Please send all data"
        })
    } else {
        new trackModel({
            awbNo: req.body.awbNo,
            addedBy: req.decoded.email,
            from: req.body.from,
            to: req.body.to,
            courierCompany: req.body.courierCompany,
            courierType: req.body.courierType,
            charge: req.body.charge,
            updates: [{
                status: 'Booked',
                description: 'Order booked successfully.'
            }]
        }).save((err, data) => {
            if (err) {
                if (err.message.includes('E11000')) {
                    res.json({
                        success: false,
                        msg: "AWB already exists."
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
                    msg: "AWB Added."
                })
            }
        })
    }
}

module.exports = addData;