const express = require('express');
const router = express.Router();
const authController = require('../controllers/usuarioController');
const { check } = require('express-validator');