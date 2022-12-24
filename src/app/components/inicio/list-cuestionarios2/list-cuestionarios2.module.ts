import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { SharedModule } from 'src/app/shared/shared.module';
import { ListCuestionarios2RoutingModule } from './list-cuestionarios2-routing.module';

//Components
import { IngresarNombreComponent } from './ingresar-nombre/ingresar-nombre.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { RespuestaCuestrionarioComponent } from './respuesta-cuestrionario/respuesta-cuestrionario.component';



@NgModule({
  declarations: [
    IngresarNombreComponent,
    PreguntaComponent,
    RespuestaCuestrionarioComponent
  ],
  imports: [
    CommonModule,
    ListCuestionarios2RoutingModule,
    SharedModule
  ]
})
export class ListCuestionarios2Module { }
