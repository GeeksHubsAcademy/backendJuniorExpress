const router = require('express').Router();


const orderController = require('../controllers/orderController');


router.post('/alquilar', orderController.alquilar);

module.exports = router;