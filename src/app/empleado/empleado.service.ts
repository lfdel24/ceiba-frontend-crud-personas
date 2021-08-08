import { Injectable } from '@angular/core';
import { Empleado, TipoIdentificacion } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  public listar(): Empleado[] {
    return [
      {
        id: 0,
        fechaNacimiento: '23-02-1990',
        nombreCompleto: 'Leonardo Fabio De la cruz',
        identificacion: {
          numero: "1094911832",
          tipoIdentificacion: TipoIdentificacion.CEDULA
        }
      },
      {
        id: 1,
        fechaNacimiento: '12-03-1994',
        nombreCompleto: 'Diego Andres De la cruz',
        identificacion: {
          numero: "1094912344",
          tipoIdentificacion: TipoIdentificacion.CEDULA
        }
      }];
  }


}
