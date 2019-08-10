var mongoose = require('mongoose');
var Schema = mongoose.Schema;


module.exports = mongoose.model('courier', new Schema({
    AWB_No: {
        type: Number,
        // Required: 'Kindly enter AWB No'
    },
    Current_Location: {
        type: String,
        // required: true
    },
    Status: {
        type: String,
        // default: 'pending'
    },
    Description: {
        type: String
    }

}));