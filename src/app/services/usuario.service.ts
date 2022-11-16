import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CambiarPassword } from '../models/Request/CambiarPassword';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl =  '/api/Usuario';
   }

   changePassword(changePassword: CambiarPassword): Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + '/CambiarPassword', changePassword)
   }

   saveUser(usuario: Usuario): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + '/Sigin', usuario);
  }
}
