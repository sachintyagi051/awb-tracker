const trackingModel = require('../../models/tracking');

const getTracking = (req, res) => {
    let query = { status: { $ne: -1 } }

    let page = parseInt(req.query.page) || 1;
    let per_page = parseInt(req.query.per_page) || 10;

    if (req.decoded && req.decoded.email) {
        query.addedBy = req.decoded.email
    }
    trackingModel.countDocuments(query, (err, count) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Something went wrong, please try again later.'
            })
        } else {
            trackingModel.find(query).skip((page - 1) * per_page).exec((err, doc) => {
                if (err) {
                    res.json({
                        success: false,
                        msg: 'Something went wrong, please try again later.'
                    })
                } else {
                    res.json({
                        success: true,
                        msg: 'Tracking Listings Found',
                        tracking: doc,
                        per_page: per_page,
                        total_awb: count
                    })
                }
            })
        }
    });
}

module.exports = getTracking;