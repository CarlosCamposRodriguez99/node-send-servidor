const Enlaces = require('../models/Enlace');
const shortid = require('shortid');

exports.nuevoEnlace = async (req, res, next) => {
    
    // Revisar si hay errores
    

    // Almacenar en la DB | Base de datos
    const { nombre_original, password } = req.body;

    const enlace = new Enlaces();
    enlace.url = shortid.generate();
    enlace.nombre = shortid.generate();
    enlace.nombre_original = shortid.generate();


    console.log(enlace);

}













// NOTES
// console.log('Desde nuevo enlace');
// npm i shortid
// 