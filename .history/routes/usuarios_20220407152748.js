c

router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe ser de al menos 6 carácteres').isLength({ min: 6 })
    ],
    usuarioController.nuevoUsuario
);

module.exports = router;