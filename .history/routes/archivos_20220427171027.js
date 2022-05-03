const express = require('express');
const router = express.Router();
const archivosController = require('../controllers/archivosController');
const auth = require('../middleware/auth');

// Subida de archivos
const multer = require('multer');
const upload = multer({ dest: '../' })

router.post('/',
    archivosController.subirArchivo
);

router.delete('/:id',
    archivosController.eliminarArchivo
);

module.exports = router;







// NOTES
// npm i multer
//