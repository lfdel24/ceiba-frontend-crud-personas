import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EmpleadoListarComponent } from './empleado-listar/empleado-listar.component';



@NgModule({
  declarations: [
    EmpleadoListarComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    EmpleadoListarComponent
  ]
})
export class EmpleadoModule { }
