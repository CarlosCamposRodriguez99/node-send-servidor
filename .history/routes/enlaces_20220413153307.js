const express = require('express');
const router = express.Router();
const enlacesController = require('../controllers/authController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');