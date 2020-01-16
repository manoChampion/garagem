const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    cep: String,
    street: String,
    number: String,
    city: String, 
    state: String,
    country: {
        type: String,
        default: "Brasil",
    },
});

module.exports = AddressSchema;