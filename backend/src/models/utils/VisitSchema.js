const mongoose = require('mongoose');

const VisitSchema = new mongoose.Schema({
    km_arrival: String,
    date_arrival: {
        type: Date,
        default: (new Date()).getTime()
    },
    km_departure: String,
    date_departure: Date
});

module.exports = VisitSchema;