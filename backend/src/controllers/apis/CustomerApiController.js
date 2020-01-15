const CustomerService = require('../../services/customers/CustomerService');

module.exports = {
    async index(req, res, next) {
        try {
            const customers = await CustomerService.index();
            
            if (customers) {
                return res.status(200).json({
                    'message': 'Customers fetched successfully',
                    'data': customers
                });
            } 

            return res.status(404).json({
                'code': 'BAD_REQUEST_ERROR',
                'description': 'No customers found in our database'
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
            const customer = await CustomerService.store(data);
            
            if (customer) {
                return res.status(201).json({
                    'message': 'Customer created successfully.',
                    'data': customer
                });
            } 

            return res.status(409).json({
                'code': 'ALREADY_EXISTS',
                'description': 'Another customer with the same infos was found in our database.'
            });
        } catch (error) {
            return res.status(500).json({
                'code': 'SERVER_ERROR',
                'description': 'Something went wrong. Please, try again!'
            });
        }
    }
}