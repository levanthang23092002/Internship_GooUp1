// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/Hotel', userController.getAllHotel);
router.get('/Room', userController.getAllRoom);

router.get('/user/:id', userController.getUser);
router.get('/user/:id/AllRoomBooking', userController.getAllRoomBooking);
router.get('/RoomBooking/:id', userController.getRoomBooking);
router.get('/AllEvaluate', userController.getAllEvaluate);
// Định nghĩa các route API khác ở đây

module.exports = router;