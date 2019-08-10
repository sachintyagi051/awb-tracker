const trackSchema = require('../../models/tracker');
const courierSchema = require('../../models/courierDetails')

module.exports = (req, res) => {
    trackSchema.findOne({ AWB_No: req.params.awb }, (err, track) => {
        if (err) {
            res.json({
                success: false,
                msg: err.message
            })
        } else if (!track || track == null) {
            res.json({
                success: false,
                msg: "Please enter data"
            })
        } else {
            courierSchema.findOne({ AWB_No: req.params.awb }, (err, courier) => {
                if (err) {
                    res.json({
                        success: false,
                        msg: err.message
                    })
                } else if (!courier || courier == null) {
                    res.json({
                        success: false,
                        msg: "Please enter data"
                    })
                } else {
                    res.json({
                        success: true,
                        awb: track,
                        courier: courier
                    })
                }
            })
        }
    })
}