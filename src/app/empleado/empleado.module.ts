import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoListarComponent } from './empleado-listar/empleado-listar.component';



@NgModule({
  declarations: [
    EmpleadoListarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EmpleadoListarComponent
  ]
})
export class EmpleadoModule { }
