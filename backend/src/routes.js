const { Router } = require('express');

// Controllers API
const CustomerApiController = require('./controllers/apis/CustomerApiController');
const CarApiController = require('./controllers/apis/CarApiController');

const router = Router();

// Customers Routes API
router.get('/customers', CustomerApiController.index);
// router.get('/customers/:id', CustomerApiController.show);
router.post('/customers', CustomerApiController.store);
// router.put('/customers', CustomerApiController.update);
// router.delete('/customers', CustomerApiController.delete);


// Cars Routes API
router.get('/cars', CarApiController.index);
router.post('/cars', CarApiController.store);


// Test Route
router.post('/test', (req, res) => {
    console.log(req.body);
}); 

module.exports = router;