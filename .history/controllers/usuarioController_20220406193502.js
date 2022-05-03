const Usuario = require('../models/Usuario');
const bcrypt

exports.nuevoUsuario = async (req, res) => {

    
    // Verificar si el usuario ya estuvo registrado
    const { email } = req.body;

    let usuario = await Usuario.findOne({ email });

    if(usuario) {
        return res.status(400).json({ msg: "El usuario ya está registrado" });
    }

    usuario = await new Usuario(req.body);
    usuario.save();

    res.json({ msg: "Usuario creado correctamente" });
}







// NOTES
// console.log(req.body);
// npm i bcrypt
// 