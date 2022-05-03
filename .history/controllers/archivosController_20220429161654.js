const multer = require('multer');

const configuracionMulter = {
    limits = { fileSize : 1000000 },
    
}

exports.subirArchivo = async (req, res) => {

    console.log(req.file);
    
}


exports.eliminarArchivo = async (req, res) => {

}






// NOTES
// 1000000 == a un mega
//