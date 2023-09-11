const express = require('express')
const { registerUser, loginUser, logoutUser, getUserInfo } = require('../controllers/userController')
const {authenticateUser} = require("../middleware/auth")

const router = express.Router()

router.route('/register').post(registerUser)
router.route("/login").post(loginUser)
router.route("/user-info").get(authenticateUser, getUserInfo)
router.route("/logout").get(logoutUser)

module.exports = router