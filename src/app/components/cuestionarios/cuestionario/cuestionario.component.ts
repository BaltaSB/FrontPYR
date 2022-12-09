import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from '../../../services/cuestionario.service';
import { Pregunta } from '../../../models/pregunta';

import { ActivatedRoute, Params } from '@angular/router';
import { CuestionarioById } from '../../../models/cuestionarioById';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {

  cuestionario: CuestionarioById;
  idCuestionario: number;
  constructor(private cuestionarioService: CuestionarioService,
              private rutaActiva: ActivatedRoute) { 
    
                this.idCuestionario = 0;
                this.cuestionario = {
                  id: 0,      
                  nombre:    '',
                  descripcion: '',
                  fechaCreacion: null,
                  activo: 0,   
                  usuarioId: 0,
                  usuario: null,
                  listPreguntas: []

                } ;
                this.rutaActiva.params.subscribe(
                  (params: Params) => {
                    this.idCuestionario = params.idCuestionario;
                  }
                );
  }

  ngOnInit(): void {
    this.recuperarPreguntas();
  }

  recuperarPreguntas(){
    this.cuestionarioService.recuperarCuestionario(this.idCuestionario).subscribe(data => {
      console.log(data);
      this.cuestionario = data;
      console.log('cuestionario');
  
    },error => {
      console.log(error);
    })
  }

}
