const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
    try {
        await mongoose.co
      
    } catch (error) {
        console.log('Lo siento, hubo un error');
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectarDB;