const express = require('express')

const router = express.Router()

// Controller functions
const { loginUser, signupUser } = require('../controllers/userController')

// Login route (POST)
router.post('/login', loginUser)

// Signup route (POST)
router.post('/signup', signupUser)

module.exports = router