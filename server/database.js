const mongoose = require('mongoose');

//Conexion a base de datos MongoDB
const URI = 'mongodb://localhost/CRUD_Application';
mongoose.connect(URI)
    .then(db => console.log('La base de datos esta conectada'))
    .catch(err => console.error(err));

    
module.exports = mongoose;