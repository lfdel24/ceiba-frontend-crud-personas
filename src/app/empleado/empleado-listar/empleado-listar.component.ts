import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-empleado-listar',
  templateUrl: './empleado-listar.component.html',
  styleUrls: ['./empleado-listar.component.css']
})
export class EmpleadoListarComponent implements OnInit {


  constructor(private service: EmpleadoService) {
  }

  columnas: string[] = ['nombre'];
  empleados: Empleado[] = [];
  dataSource: MatTableDataSource<Empleado> = new MatTableDataSource<Empleado>([]);

  ngOnInit() {
    this.empleados = this.service.listar();
    this.dataSource.data = this.empleados;
  }

}


