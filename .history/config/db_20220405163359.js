const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
    try {
      
    } catch (error) {
        console.log('Lo siento, hubo un error');
        console.log(error);
        
    }
}

module.exports = conectarDB;