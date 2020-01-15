const { Router } = require('express');

// Controllers API
const CustomerApiController = require('./controllers/apis/CustomerApiController');

const router = Router();

// Customers Routes API
router.get('/customers', CustomerApiController.index);
// router.get('/customers/:id', CustomerApiController.show);
router.post('/customers', CustomerApiController.store);
// router.put('/customers', CustomerApiController.update);
// router.delete('/customers', CustomerApiController.delete);

module.exports = router;