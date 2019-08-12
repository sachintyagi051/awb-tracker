const trackingModel = require('../../models/tracking');

const getTracking = (req, res) => {
    let query = { awbNo: req.params.awb, status: { $ne: -1 } }
    trackingModel.findOne(query).exec((err, doc) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Something went wrong, please try again later.'
            })
        } else if (!doc || doc == null) {
            res.json({
                success: false,
                msg: 'No AWB Details Found',
                tracking: doc
            })
        } else {
            res.json({
                success: true,
                msg: 'AWB Details Found',
                tracking: doc
            })
        }
    });
}

module.exports = getTracking;