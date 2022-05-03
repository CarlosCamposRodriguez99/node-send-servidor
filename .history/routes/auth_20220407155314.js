const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');

router.post('/',
    authController.auten
);


router.get('/');


module.exports = router;