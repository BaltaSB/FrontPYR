import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

//Components
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { CuestionariosComponent } from './cuestionarios/cuestionarios.component';
import { ListCuestionariosComponent } from './cuestionarios/list-cuestionarios/list-cuestionarios.component';
import { PasoDosComponent } from './cuestionarios/nuevo-cuestionario/paso-dos/paso-dos.component';
import { PasoUnoComponent } from './cuestionarios/nuevo-cuestionario/paso-uno/paso-uno.component';
import { CuestionarioComponent } from './cuestionarios/cuestionario/cuestionario.component';
import { NuevaPreguntaComponent } from './cuestionarios/nuevo-cuestionario/paso-dos/nueva-pregunta/nueva-pregunta.component';
import { NuevoCuestionarioComponent } from './cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component';


@NgModule({
  declarations: [
    CambiarPasswordComponent,
    CuestionariosComponent,
    ListCuestionariosComponent,
    PasoDosComponent,
    PasoUnoComponent,
    CuestionarioComponent,
    NuevaPreguntaComponent,
    NuevoCuestionarioComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
