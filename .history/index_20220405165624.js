const express = require('express');
const conectarDB = require()

// Crear el servidor
const app = express();


console.log("Comenzando NodeSend");

// Puerto de la app
const port = process.env.PORT || 4000;

// Arrancar la app
app.listen(port, "0.0.0.0", () => {
    console.log("El servidor está funcionando en el puerto ${port}");
});





// NOTES
// Nos quedamos en el video 694