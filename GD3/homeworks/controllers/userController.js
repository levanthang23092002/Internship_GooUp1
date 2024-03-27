const User = require('../database/connect');

exports.getAllHotel = (req, res) => {
  User.getAllHotel((error, results) => {
    if (error) {
      res.status(500).json({
        success: "Thất Bại",
        message: 'Internal server error',
        data: {},
        error_code: error
      });
    } else {
      res.json({
        success: "Thành Công",
        message: 'Success',
        data: results,
        error_code: ''
      });
    }
  });
};

exports.getAllRoom = (req, res) => {
  User.getAllRoom((error, results) => {
    if (error) {
      res.status(500).json({
        success: "Thất Bại",
        message: 'Internal server error',
        data: {},
        error_code: error
      });
    } else {
      res.json({
        success: "Thành Công",
        message: 'Success',
        data: results,
        error_code: ''
      });
    }
  });
};

exports.getUser = (req, res) => {
  const userId = req.params.id;

  User.getUser(userId, (error, results) => {
    if (error) {
      res.status(500).json({
        success: "Thất Bại",
        message: 'Internal server error',
        data: {},
        error_code: error
      });
    } else {
      res.json({
        success: "Thành Công",
        message: 'Success',
        data: results,
        error_code: ''
      });
    }
  });
};

exports.getAllRoomBooking = (req, res) => {
  const userId = req.params.id;
  User.getAllRoomBooking(userId,(error, results) => {
    if (error) {
      res.status(500).json({
        success: "Thất Bại",
        message: 'Internal server error',
        data: {},
        error_code: error
      });
    } else {
      res.json({
        success: "Thành Công",
        message: 'Success',
        data: results,
        error_code: ''
      });
    }
  });
};

exports.getRoomBooking = (req, res) => {
  const roomId = req.params.id;
  User.getRoomBooking( roomId, (error, results) => {
    if (error) {
      res.status(500).json({
        success: "Thất Bại",
        message: 'Internal server error',
        data: {},
        error_code: error
      });
    } else {
      res.json({
        success: "Thành Công",
        message: 'Success',
        data: results,
        error_code: ''
      });
    }
  });
};

exports.getAllEvaluate = (req, res) => {
  User.getAllEvaluate((error, results) => {
    if (error) {
      res.status(500).json({
        success: "Thất Bại",
        message: 'Internal server error',
        data: {},
        error_code: error
      });
    } else {
      res.json({
        success: "Thành Công",
        message: 'Success',
        data: results,
        error_code: ''
      });
    }
  });
};