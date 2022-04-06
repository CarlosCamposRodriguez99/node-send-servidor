const express = require('express');

// Crear el servidor
const app = express();



// Puerto de la app
const port = process.env.PORT || 4000;

// Arrancar la app
app.listen(port, "0.0.0.0", () => {
    console.log("El servidor estaá");
});