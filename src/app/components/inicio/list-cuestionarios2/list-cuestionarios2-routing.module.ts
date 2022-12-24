import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarNombreComponent } from './ingresar-nombre/ingresar-nombre.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { RespuestaCuestrionarioComponent } from './respuesta-cuestrionario/respuesta-cuestrionario.component';
import { ListCuestionarios2Component } from './list-cuestionarios2.component';

const routes: Routes = [
  { path: '', component: ListCuestionarios2Component },
  {path: 'ingresarNombre' , component: IngresarNombreComponent},
  {path: 'pregunta' , component: PreguntaComponent},
  {path: 'respuestaCuestionario' , component: RespuestaCuestrionarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCuestionarios2RoutingModule { }
