const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase
    },
    nombre: {

    },
    password: {

    }
});