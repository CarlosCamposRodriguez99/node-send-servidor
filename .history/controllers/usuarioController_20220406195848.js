const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');

exports.nuevoUsuario = async (req, res) => {

    
    // Verificar si el usuario ya estuvo registrado
    const { email, password } = req.body;

    let usuario = await Usuario.findOne({ email });

    if(usuario) {
        return res.status(400).json({ msg: "El usuario ya está registrado" });
    }

    // Crear un nuevo usuario
    usuario = new Usuario(req.body);
    
    // Hashear el password
    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(password, salt);

    try {
        await usuario.save();
        res.json({ msg: "Usuario creado correctamente" });
    } catch (error) {
        console.log(error);
    }

}







// NOTES
// console.log(req.body);
// npm i bcrypt
// console.log(usuario);
// Nos quedamos en el video 701