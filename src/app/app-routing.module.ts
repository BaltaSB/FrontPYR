import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CuestionariosComponent } from './components/dashboard/cuestionarios/cuestionarios.component';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { NuevoCuestionarioComponent } from './components/cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoUnoComponent } from './components/cuestionarios/nuevo-cuestionario/paso-uno/paso-uno.component';
import { PasoDosComponent } from './components/cuestionarios/nuevo-cuestionario/paso-dos/paso-dos.component';
import { AuthGuard } from './guards/auth.guard';
import { CuestionarioComponent } from './components/cuestionarios/cuestionario/cuestionario.component';
import { ListCuestionarios2Component } from './components/inicio/list-cuestionarios2/list-cuestionarios2.component';
import { IngresarNombreComponent } from './components/inicio/list-cuestionarios2/ingresar-nombre/ingresar-nombre.component';
import { PreguntaComponent } from './components/inicio/list-cuestionarios2/pregunta/pregunta.component';
import { RespuestaCuestrionarioComponent } from './components/inicio/list-cuestionarios2/respuesta-cuestrionario/respuesta-cuestrionario.component';






// Agregamos las rutas necesarias como se muestra
const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch:'full' },
  {path: 'inicio', component: InicioComponent, children: [
    {path: '', component:  BienvenidaComponent},
    {path: 'register', component: RegisterComponent },
    {path: 'login', component:  LoginComponent},
    {path: 'listCuestionarios', component: ListCuestionarios2Component},
    {path: 'ingresarNombre' , component: IngresarNombreComponent},
    {path: 'pregunta' , component: PreguntaComponent},
    {path: 'respuestaCuestionario' , component: RespuestaCuestrionarioComponent}
  ]},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard], children: [
    {path: '', component:  CuestionariosComponent},
    {path: 'cambiarPassword', component: CambiarPasswordComponent },
    {path:'cuestionario/:idCuestionario', component: CuestionarioComponent},
    {path: 'nuevoCuestionario', component: NuevoCuestionarioComponent, children:[
      {path: 'pasoUno', component: PasoUnoComponent},
      {path: 'pasoDos', component: PasoDosComponent}

    ]}
    
  ]},
  {path: '**', pathMatch:'full', redirectTo: '/inicio' },  //cuando ninguna ruta coincida que la redireccione a este
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
