import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CuestionarioService } from '../../../../../services/cuestionario.service';
import { Pregunta } from '../../../../../models/pregunta';
import { Cuestionario } from '../../../../../models/cuestionario';



@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./paso-dos.component.css']
})
export class PasoDosComponent implements OnInit {

  

  tituloCuestionario: string;
  descripcionCuestionario: string;
  listPreguntas: Pregunta[];
  loading: Boolean;

  constructor(private cuestionarioService: CuestionarioService,
              private toastr: ToastrService,
              private router: Router) {
    this.tituloCuestionario = '';
    this.descripcionCuestionario = '';
    this.listPreguntas = [];
    this.loading = false;
   }

  ngOnInit(): void {
    this.tituloCuestionario = this.cuestionarioService.tituloCuestionario;
    this.descripcionCuestionario = this.cuestionarioService.descripcionCuestionario;
    
    console.log(this.tituloCuestionario);
    console.log(this.descripcionCuestionario);
  }

  guardarPregunta(pregunta: Pregunta) {
    this.listPreguntas.push(pregunta);
  }

  eliminarPregunta(index: number): void{
    this.listPreguntas.splice(index, 1);
  }

  guardarCuestionario(): void{
    this.loading = true;

    const cuestionario: Cuestionario = {
      nombre: this.tituloCuestionario,
      descripcion: this.descripcionCuestionario,
      listPreguntas: this.listPreguntas,
      usuario: {
        email :'',
        password: '',
        nombreUsuario: ''
      }
    };

    this.cuestionarioService.guardarCuestionario(cuestionario).subscribe(data => {
      this.toastr.success('El cuestionario fue registrado con exito', 'Cuestionario Registrado');
      this.router.navigate(['/dashboard']);
    }, error => {
      console.log(error);
      this.toastr.error('Ocurrio un error ', 'Error');
      this.router.navigate(['/dashboard']);
    })
  }
}
