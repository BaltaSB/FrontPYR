import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuestionariosComponent } from './cuestionarios/cuestionarios.component';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { CuestionarioComponent } from './cuestionarios/cuestionario/cuestionario.component';
import { NuevoCuestionarioComponent } from './cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoUnoComponent } from './cuestionarios/nuevo-cuestionario/paso-uno/paso-uno.component';
import { PasoDosComponent } from './cuestionarios/nuevo-cuestionario/paso-dos/paso-dos.component';


const routes: Routes = [
  {path: '', component:  CuestionariosComponent},
    {path: 'cambiarPassword', component: CambiarPasswordComponent },
    {path:'cuestionario/:idCuestionario', component: CuestionarioComponent},
    {path: 'nuevoCuestionario', component: NuevoCuestionarioComponent, children:[
      {path: 'pasoUno', component: PasoUnoComponent},
      {path: 'pasoDos', component: PasoDosComponent}

    ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
