import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  register: FormGroup;
  passIguales: boolean = false;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private usuarioService: UsuarioService ) { 
     //aqui en el constructor agregamos las validaciones
     this.register = this.fb.group({
      usuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['']
    }, {validator: this.checkpassword });

 
  }

  ngOnInit(): void {
 
  }

  registrarUsuario(): void{
    console.log(this.register);

    if (!this.register.invalid){
    const usuarioDatos: Usuario = {
      nombreUsuario: this.register.value.usuario,
      email: this.register.value.email,
      password: this.register.value.password
    }

    this.usuarioService.saveUser(usuarioDatos).subscribe(data => {
      console.log(data);
      this.toastr.success(data.mensaje, 'Exito');
      this.register.reset();
    }, error => {
      this.toastr.error(error.error.mensaje, 'Error');
      this.register.reset();
    })
    }else{
      this.toastr.error("Faltan datos por llenar", 'Error');
    }
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

  get emailNoValido(){ 
    return this.register.get('email')?.invalid && this.register.get('email')?.touched
  }
}
