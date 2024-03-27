// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/Hotel', userController.getAllHotel);
router.get('/Room', userController.getAllRoom);

// Định nghĩa các route API khác ở đây

module.exports = router;