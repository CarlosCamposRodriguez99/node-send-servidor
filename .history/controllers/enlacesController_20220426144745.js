const Enlaces = require('../models/Enlace');
const shortid = require('shortid');

exports.nuevoEnlace = async (req, res, next) => {
    
    // Revisar si hay errores
    

    // Crear un objeto de En
    const { nombre_original, password } = req.body;

    const enlace = new Enlaces();
    enlace.url = shortid.generate();
    enlace.nombre = shortid.generate();
    enlace.nombre_original = nombre_original;
    enlace.password = password;

    try {
        
    } catch (error) {
        
    }

}













// NOTES
// console.log('Desde nuevo enlace');
// npm i shortid
//