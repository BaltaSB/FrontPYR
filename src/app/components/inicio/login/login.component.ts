import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthRequest } from 'src/app/models/Request/AuthRequest';
import {Usuario} from '../../../models/usuario'
import { LoginService } from '../../../services/login.service';
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //creamos esta propiedad de tipo FormGroup
  loading = false;
  login: FormGroup;
  

  constructor(private fb: FormBuilder, 
              private toastr: ToastrService, 
              private router: Router,
              private LoginService: LoginService) { 
    //aqui en el constructor agregamos las validaciones
    this.login = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  //agregamos esta funcion que va a ser 
  //llamada desde el formulario al momento que se envie el mismo
  log(): void{
    

    const authRequest: AuthRequest = {
      Email: this.login.value.usuario,
      Password: this.login.value.password
    }

    
    this.loading = true;
    
   
    this.LoginService.login(authRequest).subscribe(data => {
      this.loading = false;
      console.log(data.data.token);
      this.LoginService.setLocalStorage(data.data.token);
      this.router.navigate(['/dashboard']);
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error(error.errror.message, 'Error');
      this.login.reset();
    })


  }

  get usuarioNoValido(){
    return this.login.get('usuario')?.invalid && this.login.get('usuario')?.touched
  }

  get passNoValido(){ 
    return this.login.get('password')?.invalid && this.login.get('password')?.touched
  }
}
