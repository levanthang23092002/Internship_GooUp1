const authCotroller = require("../controllers/authController");
const express = require('express');
const router = express.Router();


router.post("/register", authCotroller.register);
router.post("/login", authCotroller.login)

module.exports = router;