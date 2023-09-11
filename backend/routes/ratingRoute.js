const express = require("express")
const {authenticateUser} = require("../middleware/auth")
const { createRating, getRating } = require("../controllers/ratingController")

const router = express.Router()

router.route('/create').post(authenticateUser, createRating)
router.route('/').get(authenticateUser, getRating)

module.exports = router