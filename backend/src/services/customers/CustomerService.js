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
            company = 0, cep = "00000-000", cep_data, number } = data;
        

        const customer = await Customer.create({
            full_name,
            phone,
            email,
            producer,
            company,
            address: {
                cep,
                street: cep_data.logradouro,
                number,
                city: cep_data.cidade,
                state: cep_data.estado_info.nome,
            }
        });

        return customer;
    }

}