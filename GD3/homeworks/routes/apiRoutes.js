// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getUsers);


// Định nghĩa các route API khác ở đây

module.exports = router;