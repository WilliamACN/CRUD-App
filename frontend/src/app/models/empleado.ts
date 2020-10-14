export class Empleado {

    constructor(_id = '' , cedula = '' , name = '' , department = '' , phone = '' , salary = 0 ){

        this._id = _id;
        this.cedula = cedula;
        this.name = name;
        this.department = department;
        this.phone = phone;
        this.salary = salary;
        
    }

    _id: string;
    cedula: string;
    name: string;
    department: string;
    phone: string;
    salary: number;
}
