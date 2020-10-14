const mongoose = require('mongoose');

const {Schema} = mongoose;

//Modelacion de datos
const modeloEmpleadods = new Schema ({
    cedula: {type: String , required: true},
    name: {type: String , required: true},
    department: {type: String , required: true},
    phone: {type: String , required: true},
    salary: {type: Number, required: true}

});

module.exports = mongoose.model('Empleados' , modeloEmpleadods);