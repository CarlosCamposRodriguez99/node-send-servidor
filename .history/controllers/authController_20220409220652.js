const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req, res, next) => {

    // Revisar si hay errores

    // Buscar el usuario para ver si esta registrado
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });
    // console.log(usuario);

    if(!usuario) {
        res.status(401).json({ msg: 'El usuario no existe' });
        return next();
    }

    // Verificar el password y autenticar el usuario
    
    if(bcrypt.compareSync(password, usuario.password)) {
        // Crear JWT
        const token = jwt.sign({
            nombre: usuario.nombre
        });
        
    } else {
        res.status(401).json({ msg: "Password Incorrecto" });
        return next();
    }


}

exports.usuarioAutenticado = (req, res) => {

}






// Notes
// console.log(req.body);
// console.log('El usuario si existe');
// console.log('Password Incorrecto');
// console.log('El password es correcto');
// npm i jsonwebtoken
// 