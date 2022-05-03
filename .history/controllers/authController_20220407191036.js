const Usuario = require('../models/Usuario');

exports.autenticarUsuario = async (req, res, next) => {

    // Revisar si hay errores

    // Buscar el usuario para ver si esta registrado
    const { email } = req.body;
    const usuario = await Usuario.findOne({ email });
    console.log(usu);

    console.log(req.body);

    // Verificar el password y autenticar el usuario
}

exports.usuarioAutenticado = (req, res) => {

}