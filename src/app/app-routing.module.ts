import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CuestionariosComponent } from './components/dashboard/cuestionarios/cuestionarios.component';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';

// Agregamos las rutas necesarias como se muestra
const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch:'full' },
  {path: 'inicio', component: InicioComponent, children: [
    {path: '', component:  BienvenidaComponent},
    {path: 'register', component: RegisterComponent },
    {path: 'login', component:  LoginComponent},
  ]},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: '', component:  CuestionariosComponent},
    {path: 'cambiarPassword', component: CambiarPasswordComponent },
  ]},
  {path: '**', pathMatch:'full', redirectTo: '/bienvenidos' },  //cuando ninguna ruta coincida que la redireccione a este
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
