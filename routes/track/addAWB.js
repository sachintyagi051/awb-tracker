const trackModel = require('../../models/tracker');

module.exports = (req, res) => {
    if (!req.body.AWB_No) {
        res.json({
            success: false,
            msg: "Please send all data"
        })
    } else {
        new trackModel({
            AWB_No: req.body.AWB_No,
            From: req.body.From,
            To: req.body.To,
            Courier_Company: req.body.Courier_Company,
            Courier_Type: req.body.Courier_Type,
            Charge: req.body.Charge
        }).save((err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Data Missing"
                })
            } else {
                res.json({
                    success: true,
                    msg: "AWB Added."
                })
            }
        })
    }
}