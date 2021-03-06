const Enlaces = require('../models/Enlace');
const shortid = require('shortid');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

exports.nuevoEnlace = async (req, res, next) => {
    
    // Revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    // console.log(req.body);

    // Crear un objeto de Enlace
    const { nombre_original, nombre } = req.body;

    const enlace = new Enlaces();
    enlace.url = shortid.generate();
    enlace.nombre = nombre;
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
            enlace.password = await bcrypt.hash( password, salt );
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

// Obtiene un listado de todos los enlaces
exports.todosEnlaces = async (req, res) => {
    try {
        const enlaces = await Enlaces.find({});
        res.
    } catch (error) {
        console.log(error);
    }
}



// Obtener el enlace
exports.obtenerEnlace = async (req, res, next) => {
    
    // console.log(req.params.url);
    const { url } = req.params;

    // Verificar si existe el enlace
    const enlace = await Enlaces.findOne({ url });

    if(!enlace) {
        res.status(404).json({ msg: 'Ese enlace no existe' });
        return next();
    }

    // Si el enlace existe
    res.json({ archivo: enlace.nombre });

    // Si las descargas son iguales a 1, Borrar la entrada y borrar el archivo
    const { descargas, nombre } = enlace;

    if(descargas === 1) {

        // Eliminar el archivo
        req.archivo = nombre;

        // Eliminar la entrada de DB
        await Enlaces.findOneAndRemove(req.params.url);
        next();
    } else {
        // Si las descargas son mayores a 1, Restar 1
        enlace.descargas--;
        await enlace.save();
    }


    
}





// NOTES
// console.log('Desde nuevo enlace');
// npm i shortid
// Esto es Next con MongoDB y Postman
// npm i bcrypt
// bcrypt lo utilizamos para hashear las passwords y ofrecerle mayor seguridad a los usuarios
// console.log('Aún hay descargas');
//