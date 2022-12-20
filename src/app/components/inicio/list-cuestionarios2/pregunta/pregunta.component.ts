import { Component, OnInit } from '@angular/core';
import { RespuestaCuestionarioService } from '../../../../services/respuesta-cuestionario.service';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { Router } from '@angular/router';
import { Pregunta } from '../../../../models/pregunta';
import { ListPregunta } from '../../../../models/cuestionarioById';


@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  idCuestionario: number;
  listPreguntas: Pregunta[];
  loading: boolean;
  rtaConfirmada = false;
  opcionSeleccionada: any;
  index = 0;
  idRespuestaSeleccionada: number;

  constructor(private respuestaCuestionarioService: RespuestaCuestionarioService,
    private cuestionarioService: CuestionarioService,
    private router: Router) { 

      this.idCuestionario = 0;
      this.listPreguntas = [];
      this.loading = false;
      this.idRespuestaSeleccionada = 0;
  }

  ngOnInit(): void {
    this.idCuestionario = this.respuestaCuestionarioService.idCuestionario;
    console.log(this.idCuestionario);
    if (this.idCuestionario == 0 || this.idCuestionario == null){
      this.router.navigate(['/inicio'])
      return;
    }
    this.getCuestionario();
    this.respuestaCuestionarioService.respuestas = [];
    // console.log(this.respuestaCuestionarioService.idCuestionario);
  }

  getCuestionario(): void{
  
  this.loading = true;
  this.cuestionarioService.recuperarCuestionarioResponder(this.idCuestionario).subscribe( data => {
    
    console.log(data);
    this.listPreguntas = data.listPreguntas;
    this.loading = false;
    this.respuestaCuestionarioService.cuestionario = data;
  }, error => {
    console.log(error);
  })
  }

  obtenerPregunta():string{
    
    return this.listPreguntas[this.index].descripcion;
  }

  getIndex(): number{
    return this.index;
  }

  respuestaSeleccionada(respuesta: any, id: number = 0): void{
    this.opcionSeleccionada = respuesta;
    this.rtaConfirmada = true;
    this.idRespuestaSeleccionada = id;
  }

  AddClassOption(respuesta: any): string{
    
    if (respuesta === this.opcionSeleccionada){
      
      return 'active text-light';
    }

    return ''
  }

  siguiente(): void{
    this.respuestaCuestionarioService.respuestas.push(this.idRespuestaSeleccionada);
    this.rtaConfirmada = false;
    this.idRespuestaSeleccionada = 0;

    if (this.index < this.listPreguntas.length - 1){
      this.index++;
    }else{
      this.router.navigate(['/inicio/respuestaCuestionario'])
    }
  }
}
