const Enlaces = require('../models/Enlace');
const shortid = require('shortid');
const bcrypt = require('bcrypt');

exports.nuevoEnlace = async (req, res, next) => {
    
    // Revisar si hay errores
    

    // Crear un objeto de Enlace
    const { nombre_original } = req.body;

    const enlace = new Enlaces();
    enlace.url = shortid.generate();
    enlace.nombre = shortid.generate();
    enlace.nombre_original = nombre_original;
    

    // Si el usuario esta autenticado
    if(req.usuario) {
        const { password, descargas } = req.body;

        // Asignar a enlace el número de descargas
        if(descargas) {
            enlace.descargas = descargas;
        }

        // Asignar un password
        if(password) {
            const salt = await bcrypt.genSalt(10);
            enlace.password = await bcrypt.has
        }

        // Asignar el autor
        enlace.autor = req.usuario.id
    }

    // Almacenar en la DB || Base de Datos
    try {
        await enlace.save();
        return res.json({ msg: `${enlace.url}` });
        next();
    } catch (error) {
        console.log(error);
    }
}













// NOTES
// console.log('Desde nuevo enlace');
// npm i shortid
// Esto es Next con MongoDB y Postman
// npm i bcrypt
// bcrypt lo utilizamos para hashear las passwords y ofrecerle mayor seguridad a los usuarios
// 