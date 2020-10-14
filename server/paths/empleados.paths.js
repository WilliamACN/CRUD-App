const express = require('express');
const paths = express.Router();

const empleadoCtrl = require('../controladores/empleados.controlado');

/** Funcionalidades CRUD */

paths.get('/', empleadoCtrl.getEmpleados);
paths.post('/', empleadoCtrl.createEmpleado);
paths.get('/:id', empleadoCtrl.getEmpleado);
paths.put('/:id' , empleadoCtrl.editEmpleado);
paths.delete('/:id', empleadoCtrl.eliminarEmpleado)
module.exports = paths;