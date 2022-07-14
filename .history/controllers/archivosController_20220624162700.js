const multer = require('multer');
const shortid = require('shortid');
const fs = require('fs');
const Enlace = require('../models/Enla');


exports.subirArchivo = async (req, res, next) => {

    const configuracionMulter = {
        limits : { fileSize : req.usuario ? 1024 * 1024 * 10 : 1024 * 1024 },
        storage: fileStorage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, __dirname+'/../uploads')
            },
            filename: (req, file, cb) => {
                const extension = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
                cb( null, `${shortid.generate()}${extension}` );
            }
        })
    }
    
    const upload = multer(configuracionMulter).single('archivo');
    

    upload( req, res, async (error) => {
        console.log(req.file);

        if(!error) {
            res.json({ archivo: req.file.filename });
        } else {
            console.log(error);
            return next();
        }
    });
}


exports.eliminarArchivo = async (req, res) => {
    console.log(req.archivo);

    try {
        fs.unlinkSync(__dirname + `/../uploads/${req.archivo}`);
        console.log('Archivo eliminado');
    } catch (error) {
        console.log(error);
    }
}

// Descarga un archivo
exports.descargar = async (req, res) => {

    // Obtiene el enlace
    const enlace = Enlace


    const archivo = __dirname + '/../uploads/' + req.params.archivo;
    res.download(archivo);


    // Eliminar el archivo y la entrada de la base de datos
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
// 1000000 (un millón) == a un mega
// En limits puede ser 1000000 || 1024 * 1024 
// fileFilter: (req, file, cb) => {
//     if(file.mimetype === "application/pdf") {
//         return cb(null, true);
//     } 
// }
// file.mimetype.split('/')[1];