const Usuario = require('../models/Usuario');

exports.nuevoUsuario = async (req, res) => {

   // console.log(req.body);

    const usuario = await new Usuario(req.body);
    

    res.json({ msg: 'Usuario creado correctamente' });
}