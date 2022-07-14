const express = require('express');
const router = express.Router();
const archivosController = require('../controllers/archivosController');
const auth = require('../middleware/auth');

router.post('/',
    auth,
    archivosController.subirArchivo
);

router.get('/:',
    
);

module.exports = router;







// NOTES
// npm i multer
// upload.single('archivo'),
// Subida de archivos
// const multer = require('multer');
// const upload = multer({ dest: './uploads/' });
// router.delete('/:id',
//     archivosController.eliminarArchivo
// );
//
// 