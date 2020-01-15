const mongoose = require('mongoose');
const VisitSchema = require('./utils/VisitSchema');

const CarSchema = new mongoose.Schema({
    carmaker: String,
    model: String,
    year: Number,
    engine: String,
    license: String,
    fuel: String,
    type: String,
    customer: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Customer'
    },
    visits: [
        {
            type: VisitSchema,
            index: true,
        },
    ]
}, { timestamps: true }
);

module.exports = mongoose.model('Car', CarSchema);