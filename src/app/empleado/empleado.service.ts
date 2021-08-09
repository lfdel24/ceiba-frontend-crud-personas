import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado, TipoIdentificacion } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8080/personas';

  public listar(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.url);
  }

  public create(): void {
    const empleado: Empleado = {
      id: 13,
      identificacion: {
        tipoIdentificacion: TipoIdentificacion.CEDULA,
        numero: '10000001'
      },
      nombreCompleto: 'Demo antonio demo',
      fechaNacimiento: "12/12/2021"
    };
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post(this.url, JSON.stringify({ "numero": "1000040", "nombreCompleto": "Demo demo" }), { headers: headers }).subscribe(
      value => console.log(value)
    );
  }





}



