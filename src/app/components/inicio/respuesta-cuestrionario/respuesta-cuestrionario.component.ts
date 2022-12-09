import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from '../../../services/cuestionario.service';
import { Cuestionario } from '../../../models/cuestionario';
import { RespuestaCuestionarioService } from '../../../services/respuesta-cuestionario.service';
import { Pregunta } from '../../../models/pregunta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-respuesta-cuestrionario',
  templateUrl: './respuesta-cuestrionario.component.html',
  styleUrls: ['./respuesta-cuestrionario.component.css']
})
export class RespuestaCuestrionarioComponent implements OnInit {

  cuestionario?: Cuestionario;
  listPreguntas: Pregunta[];
  respuestaUsuario: number[] = [];

  constructor(private cuestionarioService: CuestionarioService,
              private respuestaCuestionarioService: RespuestaCuestionarioService,
              private router:Router) { 
      this.listPreguntas = [];
  }

  ngOnInit(): void {
    if (this.respuestaCuestionarioService.idCuestionario == null || this.respuestaCuestionarioService.idCuestionario == 0){
      this.router.navigate(['/inicio']);
    }else{
      this.cuestionario = this.respuestaCuestionarioService.cuestionario;
      this.respuestaUsuario = this.respuestaCuestionarioService.respuestas;
      console.log(this.cuestionario);
      console.log(this.respuestaUsuario);
    }
  }

}
