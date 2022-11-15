import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {

  cambiarPassword : FormGroup;

  constructor(private fb: FormBuilder) { 
    this.cambiarPassword = this.fb.group({
      passwordAnterior: ['', Validators.required],
      nuevoPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmarPassowrd: ['' ]
    }, {validator: this.checkpassword });
  }

  ngOnInit(): void {
  }


  checkpassword(group: FormGroup): any {
    //Accedemos al valor del campo password de nuestro formulario
    const pass = group.controls.nuevoPassword.value;
    const confirmPass = group.controls.confirmarPassowrd.value;

    return pass === confirmPass ? null : {notSame: true};
  }

  guardarPassword(){
    console.log('');
  }

  
  get passAnteriorNoValido(){
    return this.cambiarPassword.get('passwordAnterior')?.invalid && this.cambiarPassword.get('passwordAnterior')?.touched
  }

  get nuevoPassNoValido(){
    return this.cambiarPassword.get('nuevoPassword')?.invalid && this.cambiarPassword.get('nuevoPassword')?.touched
  }

  get confirmarPassowrdNoValido(){
    return this.cambiarPassword.get('confirmarPassowrd')?.invalid && this.cambiarPassword.get('confirmarPassowrd')?.touched
  }
}
