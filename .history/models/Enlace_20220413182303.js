const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enlacesSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    nombre: {
      
    }
});

module.exports = mongoose.model('Enlaces', enlacesSchema);