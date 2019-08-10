const courierModel = require('../../models/courierDetails');

module.exports = (req, res) => {
    if (!req.body.AWB_No) {
        res.json({
            success: false,
            msg: "Please send all data"
        })
    } else {
        new courierModel({
            AWB_No: req.body.AWB_No,            
            Current_Location: req.body.Current_Location,
            Status: req.body.Status,
            Description: req.body.Description
        }).save((err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Data Missing"
                })
            } else {
                res.json({
                    success: true,
                    msg: "Courier Details Saved.",
                })
            }
        });
    }
}
