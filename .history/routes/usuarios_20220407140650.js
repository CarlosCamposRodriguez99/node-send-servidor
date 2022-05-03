const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { check } = require('expre')

router.post('/',
    usuarioController.nuevoUsuario
);

module.exports = router;