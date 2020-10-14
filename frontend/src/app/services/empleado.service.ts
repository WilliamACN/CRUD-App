import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Empleado } from '../models/empleado';
import {EmpleadosComponent} from '../componentes/empleados/empleados.component';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  selectedEmpleado : Empleado;

  empleados: Empleado [];

  readonly URL = 'http://localhost:3000/empleados';


  constructor(private http: HttpClient) { 
    this.selectedEmpleado = new Empleado();
  }

  /** Metodos CRUD */

  getEmpleados(){
    return this.http.get(this.URL);
      
  }

  postEmpleado(empleado: Empleado){
    return this.http.post(this.URL , empleado);
  }

  putEmpleado(empleado: Empleado){
    return this.http.put(this.URL  + `/${empleado._id}`, empleado);
  }

  deleteEmpleado(_id: string){
    return this.http.delete(this.URL  + `/${_id}`);
  }
}
