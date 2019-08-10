const courierSchema = require('../../models/courierDetails');

module.exports = (req, res) => {
    if (!req.body.AWB_No) {
        res.json({
            succes: false,
            msg: "Please provide AWB_No"
        })
    } else {
        courierSchema.update({
            AWB_No: req.body.AWB_No
        }, {
            $set: {
                Current_Location: req.body.Current_Location,
                Status: req.body.Status,
                Description: req.body.Description
            }
        }, (err, updated) => {
            console.log(updated)
            if (err) {
                res.json({
                    success: false,
                    msg: 'Server error'
                })
            } else {
                res.json({
                    success: true,
                    msg: 'Updated'

                })
            }
        })
    }
}