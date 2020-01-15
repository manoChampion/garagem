const express = require('express');
const Customer = require('../../models/Customer');

module.exports = {
    async index () {
        let customers = await Customer.find({});

        if (customers.length > 0) {
            return customers;
        } else {
            return false;
        }
    },

    async store (data) {
        const { full_name, phone, email, producer = 0, 
            company = 0, cep = "00000-000", street = "", 
            number = 00, city = "", state = "", 
            country = "" } = data;
        
        const customer = await Customer.create({
            full_name,
            phone,
            email,
            producer,
            company,
            address: {
                cep,
                street,
                number,
                city,
                state,
                country
            }
        });

        return customer;
    }

}