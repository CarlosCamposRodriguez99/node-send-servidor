const multer = require('multer');
const shortid = require('shortid');

const configuracionMulter = {
    limits = { fileSize : 1000000 },
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname+'/../uploads')
        },
        filename: (req, file, cb) => {
            const extension = file.mimetype.split('/')[1];
            cb( null, `${shortid.generate()}.${extension}` );
        },
        fileFilter: (req, file, cb) => {
            if(file.mimetype === "application/pdf") {
                return cb(null, true);
            } 
        }
    })
}

exports.subirArchivo = async (req, res) => {

    console.log(req.file);
    
}


exports.eliminarArchivo = async (req, res) => {

}






// NOTES
// 1000000 == a un mega
// fileFilter: (req, file, cb) => {
    if(file.mimetype === "application/pdf") {
        return cb(null, true);
    } 
}