import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empleado } from 'src/app/models/empleado';

import { EmpleadoService} from '../../services/empleado.service'

declare var M: any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers :[EmpleadoService]
})
export class EmpleadosComponent implements OnInit { 

  constructor( public empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }


  //Metodo para agrgar un empleado desde el Front
  addEmpleado(form: NgForm){
    if(form.value._id){
      this.empleadoService.putEmpleado(form.value)
        .subscribe(res => {
          M.toast({html : 'Actualizado'});
          this.getEmpleados();
          this.resetForm();
        });
    }else{
      this.empleadoService.postEmpleado(form.value)
      .subscribe(res => {
        this.resetForm();
        M.toast({html : 'Guardado'});
        this.getEmpleados();
        this.resetForm();
      });
    }
    this.resetForm();
  }

  //Metodo para obtener los empleados desde el back hasta el front
  getEmpleados(){
    this.empleadoService.getEmpleados()
      .subscribe(res =>{
        this.empleadoService.empleados = res as Empleado[];
        console.log(res);
      })
  }

  //Metodo para editar un empleado desde el front
  editarEmpleado(empleado: Empleado){
    this.empleadoService.selectedEmpleado = empleado;
  }

  //Metodo para eliminar un empleado desde el front
  eliminarEmpleado(_id: string){
    if(confirm('Estas seguro que deseas eliminar este dato?')){
      this.empleadoService.deleteEmpleado(_id)
      .subscribe(res =>{
        this.getEmpleados();
        M.toast({html : 'Eliminado'});
      });
      
    }   

  }

  //Metodo para limpiar el formulario
  resetForm(form?: NgForm){
    if(form ){
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
    }
  }
}
