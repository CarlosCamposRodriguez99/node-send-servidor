const Usuario = require('../models/Usuario');

exports.nuevoUsuario = async (req, res) => {

    
    // Verificar si el usuario ya estuvo registrado
    const { email } = req.body;

    let usuario = await Usuario.findOne({ email });

    if(usuario) {
        return res.status(400).json({ msg: "" })
    }

    const usuario = await new Usuario(req.body);
    usuario.save();

    res.json({ msg: "Usuario creado correctamente" });
}







// NOTES
// console.log(req.body);
//