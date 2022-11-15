import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  register: FormGroup;
  passIguales: boolean = false;

  constructor(private fb: FormBuilder ) { 
     //aqui en el constructor agregamos las validaciones
     this.register = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['']
    }, {validator: this.checkpassword });

 
  }

  ngOnInit(): void {
 
  }

  registrarUsuario(): void{
    console.log(this.register);
  }

  checkpassword(group: FormGroup): any {
    //Accedemos al valor del campo password de nuestro formulario
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : {notSame: true};
  }

  get usuarioNoValido(){
    return this.register.get('usuario')?.invalid && this.register.get('usuario')?.touched
  }

  get passNoValido(){ 
    return this.register.get('password')?.invalid && this.register.get('password')?.touched
  }
}
