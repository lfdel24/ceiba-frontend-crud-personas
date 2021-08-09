import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8080/personas';

  public listar(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.url);
  }





}



