const multer = require('multer');

const configuracionMulter = {
    limits = { fileSize }
}

exports.subirArchivo = async (req, res) => {

    console.log(req.file);
    
}


exports.eliminarArchivo = async (req, res) => {

}