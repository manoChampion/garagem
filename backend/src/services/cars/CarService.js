const express = require('express');

const Car = require('../../models/Car');

module.exports = {
    async index () {
        const cars = await Car.find({});

        return cars.length > 0 ? cars : false;
    },

    async store (data) {
        const license = await Car.find({ "license": data.license });
        
        return license.length > 0 ? false : Car.create(data);     
    }
}