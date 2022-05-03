const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { check } = require('express-validator');

router.post('/',
    [
        che
    ],
    usuarioController.nuevoUsuario
);

module.exports = router;