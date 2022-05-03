const Usuario = require('../models/Usuario');

exports.nuevoUsuario = async (req, res) => {

    

    const usuario = await new Usuario(req.body);
    usuario.save();

    res.json({ msg: "Usuario creado correctamente" });
}