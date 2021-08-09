import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoListarComponent } from './empleado-listar/empleado-listar.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EmpleadoListarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    EmpleadoListarComponent
  ]
})
export class EmpleadoModule { }
