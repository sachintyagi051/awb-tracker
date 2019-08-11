const trackingModel = require('../../models/tracking');

const deleteTracking = (req, res) => {
    if (!req.body.awbNo) {
        res.json({
            succes: false,
            msg: "Please provide AWB Number"
        })
    } else {
        trackingModel.findOneAndUpdate({
            awbNo: req.body.awbNo,
            addedBy: req.decoded.email
        }, { status: -1 }, (err, data) => {
            if (err) {
                console.log(err)
                res.json({
                    success: false,
                    msg: 'Something went wrong, please try again later.'
                })
            } else {
                res.json({
                    success: true,
                    msg: 'AWB deleted.'
                })
            }
        })
    }
}

module.exports = deleteTracking;