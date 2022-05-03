const express = require('express');
const conectarDB = require('./config/db');
const auth = require('./middleware/auth');

// Crear el servidor
const app = express();


// Conectar a la base de datos
conectarDB();

// Puerto de la app
const port = process.env.PORT || 4000;

// Habilitar leer los valores de un body
app.use( express.json() );


// Rutas de la app
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));

// Arrancar la app
app.listen(port, "0.0.0.0", () => {
    console.log("El servidor está funcionando en el puerto ${port}");
});





// NOTES
// console.log("Comenzando NodeSend");
// app.use(auth);
//