import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario';
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthRequest } from '../models/Request/AuthRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Usuario/Login';
   }

   login(authRequest: AuthRequest): Observable<any>{

    return this.http.post(this.myAppUrl + this.myApiUrl, authRequest);
   }

   setLocalStorage(data: string):void {
    localStorage.setItem('token', data);
   }
   
   getTokenDecoded(): any{
    const helper = new JwtHelperService(); 
    const token = localStorage.getItem('token') ?? ''
    const decodedToken = helper.decodeToken(token);
    return decodedToken;
   }

  removeLocalStorage(): void {
    localStorage.removeItem('token');
  }
}
