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
        const enlaces = await Enlaces.find({}).select('url -_id');
        res.json({enlaces});
    } catch (error) {
        console.log(error);
    }
}

// Retorna si el enlace tiene password o no
exports.tienePassword = async (req, res, next) => {
    
    // console.log(req.params.url);
    const { url } = req.params;

    console.log(url);

    // Verificar si existe el enlace
    const enlace = await Enlaces.findOne({ url });

    if(!enlace) {
        res.status(404).json({ msg: 'Ese enlace no existe' });
        return next();
    }

    if(enlace.password) {
        return res.json({ password: true, enlace: enlace.url });
    }

    next();
}

// Verifica si el password es correcto
exports.verificarPassword = async (req, res, next)


// Obtener el enlace
exports.obtenerEnlace = async (req, res, next) => {
    
    // console.log(req.params.url);
    const { url } = req.params;

    console.log(url);

    // Verificar si existe el enlace
    const enlace = await Enlaces.findOne({ url });

    if(!enlace) {
        res.status(404).json({ msg: 'Ese enlace no existe' });
        return next();
    }

    // Si el enlace existe
    res.json({ archivo: enlace.nombre });

    next();
}







// NOTES
// console.log('Desde nuevo enlace');
// npm i shortid
// Esto es Next con MongoDB y Postman
// npm i bcrypt
// bcrypt lo utilizamos para hashear las passwords y ofrecerle mayor seguridad a los usuarios
// console.log('Aún hay descargas');
// res.json({ archivo: enlace.nombre });
// 