const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({   
    AWB_No: {
        type: Number,
        // Required: 'Kindly enter AWB No'
    },
    From: {
        type: String

    },
    To: {
        type: String

    },
    Courier_Company: {
        type: String

    },
    Courier_Type: {
        type: String

    },
    Charge: {
        type: Number
    }

})

module.exports = mongoose.model('tracker', trackSchema);