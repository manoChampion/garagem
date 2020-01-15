const mongoose = require('mongoose');
const AddressSchema = require('./utils/AddressSchema');

const CustomerSchema = new mongoose.Schema({
    full_name: String,
    phone: String,
    email: String,
    producer: {type: Number, default: 0},
    company: {type: Number, default: 0},
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