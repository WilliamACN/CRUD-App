const { replaceOne } = require('../models/empleados');
const Empelados = require('../models/empleados')

const empleadoCtrl ={};


//Obtiene todos los empleados de la base de datos
empleadoCtrl.getEmpleados = async (req , res ) =>{
    const findEmpleados = await Empelados.find();
    res.json(findEmpleados);
};

//Crear un nuevo empleado
empleadoCtrl.createEmpleado = async (req , res) =>{

    const empleado = new Empelados({
        cedula:req.body.cedula,
        name: req.body.name,
        department: req.body.department,
        phone: req.body.phone,
        salary: req.body.salary
    });
    await empleado.save();
    res.json({
        'status' : "Empleado guardado con exito"
    });

};

//Ontiene solo un empleado especifico de la base de datos
empleadoCtrl.getEmpleado = async (req , res) =>{
    //console.log(req.params.id);
    const findEmpleado = await Empelados.findById(req.params.id);
    res.json(findEmpleado);
};

    //Editar algun empleado de la base de datos
empleadoCtrl.editEmpleado = async (req , res) =>{

    const {id} = req.params;
    const empleado = {
        cedula : req.body.cedula,
        name : req.body.name,
        department : req.body.department,
        phone : req.body.phone,
        salary : req.body.salary
    };

    await Empelados.findByIdAndUpdate(id , {$set: empleado}, {new: true});
    res.json({
        status: 'Datos del empleado actualizado'
    });
};

//Elimina un dato de la base de datos
empleadoCtrl.eliminarEmpleado = async (req , res) =>{
    await Empelados.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Empleado eliminado'
    });
};

//Esportamos los datos para poder usarlo en cualquier lado que los necesitemos.
module.exports = empleadoCtrl;
