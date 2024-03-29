import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RespuestaCuestionarioService } from '../../../../services/respuesta-cuestionario.service';


@Component({
  selector: 'app-ingresar-nombre',
  templateUrl: './ingresar-nombre.component.html',
  styleUrls: ['./ingresar-nombre.component.css']
})
export class IngresarNombreComponent implements OnInit {

  nombreParticipante: string;
  
  constructor(private router: Router,
    private respuestaCuestionarioService: RespuestaCuestionarioService) { 
    this.nombreParticipante = '';
    console.log('ingresar nombre');
  }

  ngOnInit(): void {
    console.log('ingresar nombre');
    if (this.respuestaCuestionarioService.idCuestionario == null || this.respuestaCuestionarioService.idCuestionario == 0){
      this.router.navigate(['/inicio'])
    }
  }

  siguiente(){
    this.respuestaCuestionarioService.nombreParticipante = this.nombreParticipante;
    // this.router.navigate(['/inicio/listCuestionarios']);
    this.router.navigate(['/inicio/pregunta']);
  }
}
