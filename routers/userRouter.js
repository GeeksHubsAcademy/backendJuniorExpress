
const router = require('express').Router();

let userController = require('../controllers/userController');

router.post('/register', userController.registerUser);

module.exports = router;