const multer = require('multer');
const shortid = require('shortid');



exports.subirArchivo = async (req, res, next) => {

    const configuracionMulter = {
        limits : { fileSize : req.usuario ? 1024 * 1024 * 10 : 1024 * 1024 },
        storage: fileStorage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, __dirname+'/../uploads')
            },
            filename: (req, file, cb) => {
                const extension = file.originalname.substring()
                cb( null, `${shortid.generate()}.${extension}` );
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
//