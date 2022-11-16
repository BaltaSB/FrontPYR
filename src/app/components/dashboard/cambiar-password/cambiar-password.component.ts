import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { CambiarPassword } from '../../../models/Request/CambiarPassword';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {

  cambiarPassword : FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService, 
              private usuarioService: UsuarioService) { 
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
    this.loading = true;
    const cambiarPasswordV: CambiarPassword = {
      passwordAnterior: this.cambiarPassword.value.passwordAnterior,
      nuevaPassword: this.cambiarPassword.value.nuevoPassword
    }

    this.usuarioService.changePassword(cambiarPasswordV).subscribe(data => {
 
      this.loading = false;
     
      if (data.error == 1){
        this.toastr.error(data.message, 'Error');
      }else{
        this.toastr.success(data.message, 'Exito');
      }
      this.cambiarPassword.reset();
    }, error =>{
      this.loading = false;
      this.toastr.error(error.message, 'Error');
      this.cambiarPassword.reset();
    })
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
