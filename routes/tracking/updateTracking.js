const trackingModel = require('../../models/tracking');

const editTracking = (req, res) => {
    if (!req.body.awbNo) {
        res.json({
            succes: false,
            msg: "Please provide AWB Number"
        })
    } else {
        let update = {
            currentLocation: req.body.currentLocation,
            status: req.body.status,
            description: req.body.description
        }
        trackingModel.findOneAndUpdate({
            awbNo: req.body.awbNo,
            addedBy: req.decoded.email
        }, { $push: { updates: update } }, (err, data) => {
            if (err) {
                console.log(err)
                res.json({
                    success: false,
                    msg: 'Something went wrong, please try again later.'
                })
            } else {
                res.json({
                    success: true,
                    msg: 'AWB Status updated'
                })
            }
        })
    }
}

module.exports = editTracking;