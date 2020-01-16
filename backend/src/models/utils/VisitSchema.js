const mongoose = require('mongoose');

const VisitSchema = new mongoose.Schema({
    km_arrival: String,
    date_arrival: {
        type: Date,
        default: Date.now()
    },
    km_departure: {
        type: String,
        default: "0"
    },
    date_departure: Date
});

module.exports = VisitSchema;