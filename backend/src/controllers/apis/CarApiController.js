const CarService = require('../../services/cars/CarService');

module.exports = {
    async index(req, res, next) {
        try {
            const cars = await CarService.index();
            
            if (cars) {
                return res.status(200).json({
                    'message': 'Cars fetched successfully',
                    'data': cars
                });
            } 

            return res.status(404).json({
                'code': 'BAD_REQUEST_ERROR',
                'description': 'No Cars found in our database'
            });
        } catch (error) {
            return res.status(500).json({
                'code': 'SERVER_ERROR',
                'description': 'Something went wrong. Please, try again!'
            });
        }
    },

    async store(req, res, next) {
        const data = req.body;

        try {
            const car = await CarService.store(data);
            
            if (car) {
                return res.status(201).json({
                    'message': 'Car created successfully.',
                    'data': car
                });
            } 

            return res.status(409).json({
                'code': 'ALREADY_EXISTS',
                'description': 'Another Car with the same infos was found in our database.'
            });
        } catch (error) {
            return res.status(500).json({
                'code': 'SERVER_ERROR',
                'description': 'Something went wrong. Please, try again!'
            });
        }
    }
}