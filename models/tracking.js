const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({
    awbNo: {
        type: Number,
        required: true,
        unique: true
    },
    addedBy: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    courierCompany: {
        type: String,
        required: true
    },
    courierType: {
        type: String,
        required: true
    },
    charge: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        default: 0
    },
    updates: [{
        currentLocation: {
            type: String
        },
        status: {
            type: String,
            default: 'pending'
        },
        description: {
            type: String
        }
    }]
})

module.exports = mongoose.model('tracker', trackSchema);