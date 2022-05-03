const multer = require('multer');

const configuracionMulter = {
    limits = { fileSize : 1000000 },
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname+'/../uploads')
        },
        filename: 
    })
}

exports.subirArchivo = async (req, res) => {

    console.log(req.file);
    
}


exports.eliminarArchivo = async (req, res) => {

}






// NOTES
// 1000000 == a un mega
//