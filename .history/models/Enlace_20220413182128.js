const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enlacesSchema = new Schema({
    url: {
        
    }
});

module.exports = mongoose.model('Enlaces', enlacesSchema);