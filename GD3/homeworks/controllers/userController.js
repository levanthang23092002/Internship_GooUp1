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