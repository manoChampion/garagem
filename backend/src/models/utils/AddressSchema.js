const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    cep: String,
    street: String,
    number: String,
    city: String, 
    state: String,
    country: String
});

module.exports = AddressSchema;