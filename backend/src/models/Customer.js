const mongoose = require('mongoose');
const AddressSchema = require('./utils/AddressSchema');

const CustomerSchema = new mongoose.Schema({
    full_name: String,
    phone: String,
    email: String,
    producer: {type: Boolean, default: false},
    company: {type: Boolean, default: false},
    cpf: String,
    cnpj: String,
    address: {
        type: AddressSchema,
        index: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Customer', CustomerSchema);