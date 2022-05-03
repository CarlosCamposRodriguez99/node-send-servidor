const Usuario = require('../models/Usuario');

exports.nuevoUsuario = async (req, res) => {

    
    // Verificar si el usuario ya est

    const usuario = await new Usuario(req.body);
    usuario.save();

    res.json({ msg: "Usuario creado correctamente" });
}







// NOTES
// console.log(req.body);
//