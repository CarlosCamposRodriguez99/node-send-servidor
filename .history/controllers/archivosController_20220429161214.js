const multer = require('multer');

const configuracionMulter = {
    limits = { fileSize : 10 }
}

exports.subirArchivo = async (req, res) => {

    console.log(req.file);
    
}


exports.eliminarArchivo = async (req, res) => {

}