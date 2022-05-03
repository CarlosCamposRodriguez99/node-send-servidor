const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enlacesSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    nombre_original: {
        type: String,
        required: true
    },
    descargas: {
        type: Number
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId
    }

});

module.exports = mongoose.model('Enlaces', enlacesSchema);