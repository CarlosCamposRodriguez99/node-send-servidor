const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');


router.post('/',
    [
        check('email', 'Agrega un email válido').isEmail()
    ],
    authController.autenticarUsuario
);


router.get('/',
    auth,
    authController.usuarioAutenticado
);


module.exports = router;