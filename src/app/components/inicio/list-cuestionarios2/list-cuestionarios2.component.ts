import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from '../../../services/cuestionario.service';
import { Cuestionario } from '../../../models/cuestionario';
import { Router } from '@angular/router';
import { RespuestaCuestionarioService } from '../../../services/respuesta-cuestionario.service';

@Component({
  selector: 'app-list-cuestionarios2',
  templateUrl: './list-cuestionarios2.component.html',
  styleUrls: ['./list-cuestionarios2.component.css']
})
export class ListCuestionarios2Component implements OnInit {
  cuestionarios: Cuestionario[];
  loading: boolean;

  constructor(private cuestionarioService: CuestionarioService,
    private router: Router,
    private respuestaCuestionario: RespuestaCuestionarioService) { 
    this.cuestionarios = [];
    this.loading = false;
  }

  ngOnInit(): void {
    this.recuperarCuestionarios();
  }

  recuperarCuestionarios(){
    this.loading = true;
    this.cuestionarioService.listadoCuestionarios().subscribe(data => {
      
      this.cuestionarios = data;
      this.loading = false;
    },error => {
      this.loading = false;
      console.log(error);
    })
  }

  ingresarNombre(idCuestionario: number = 0): void{
    //Compartimos datos entre los componentes usando el servicio en lugar de un @Input u @Output
    this.respuestaCuestionario.idCuestionario = idCuestionario;
    this.router.navigate(['/inicio/ingresarNombre']);
  }



}
