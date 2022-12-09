import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-cuestionarios',
  templateUrl: './cuestionarios.component.html',
  styleUrls: ['./cuestionarios.component.css']
})
export class CuestionariosComponent implements OnInit {
  nombreUsuario: string;

  constructor(private LoginService: LoginService) {
    this.nombreUsuario = '';
   }

  ngOnInit(): void {
    // this.getNombreUsuario();
  }

  getNombreUsuario(){
   
    this.nombreUsuario = this.LoginService.getTokenDecoded().sub;  
  }
}
