import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Cuestionario } from '../models/cuestionario';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  tituloCuestionario: string;
  descripcionCuestionario: string;
  myAppUrl: String;
  myApiUrl: string;

  constructor(private http: HttpClient) { 
    
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = "/api/Cuestionario";

    this.tituloCuestionario = '';
    this.descripcionCuestionario = '';
  }

  guardarCuestionario(cuestionario: Cuestionario): Observable<any>{
    console.log(cuestionario);
    return this.http.post(this.myAppUrl + this.myApiUrl + '/Guardar', cuestionario);
  }

  listadoCuestionariosByUser(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + '/ListadoPorUsuario');
  }

  eliminarCuestionario(index: number): Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + `/Eliminar/${index}`);
  }

  recuperarCuestionario(index: number): Observable<any>{
    
    return this.http.get(this.myAppUrl + this.myApiUrl + `/cuestionario/${index}`)
    .pipe(
      map(data => {
        let valor: any;
        valor = data;
        return valor['data'];
      }
      )
    );    
  }

  recuperarCuestionarioResponder(index: number): Observable<any>{
    
    return this.http.get(this.myAppUrl + this.myApiUrl + `/cuestionarioResponder/${index}`)
    .pipe(
      map(data => {
        let valor: any;
        valor = data;
        return valor['data'];
      }
      )
    );    
    
  }

  listadoCuestionarios(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + '/Listado')
    .pipe(
      map(data => {
        let valor: any;
        valor = data;
        return valor['data'];
      }
      )
    );
  }
}
