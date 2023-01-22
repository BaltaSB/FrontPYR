import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Baltazar',
    apellido: 'Del rio',
    correo: 'balta.rt21@gmail.com',
    pais: 'MEX',
    genero: 'M'
  }

  paises: any[] = [];

  constructor(private pais:PaisService) { }

  ngOnInit(): void {
    this.pais.getPaises().subscribe(paises =>{
          this.paises = paises;
          this.paises.unshift({
            nombre:'[Seleccione un Pais]',
            codigo: ''
          })
        } 
      );
  }

  guardar(forma:NgForm){
    console.log(forma);

    if (forma.invalid){
      
      Object.values(forma.controls).forEach(control => {
        control.markAsTouched();
      })
      return;
    }

    console.log(forma.value);
  }
}
