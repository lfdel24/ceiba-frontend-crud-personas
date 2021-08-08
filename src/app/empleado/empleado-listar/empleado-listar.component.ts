import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado-listar',
  templateUrl: './empleado-listar.component.html',
  styleUrls: ['./empleado-listar.component.css']
})
export class EmpleadoListarComponent implements OnInit {


  constructor(private service: EmpleadoService) {
  }

  empleados: Empleado[] = [];

  ngOnInit() {
    this.empleados = this.service.listar();
  }

}


