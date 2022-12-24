import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


import { AuthGuard } from './guards/auth.guard';
import { ListCuestionarios2Component } from './components/inicio/list-cuestionarios2/list-cuestionarios2.component';


// Agregamos las rutas necesarias como se muestra
const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch:'full' },
  {path: 'inicio', component: InicioComponent, children: [
    {path: '', component:  BienvenidaComponent},
    {path: 'register', component: RegisterComponent },
    {path: 'login', component:  LoginComponent},
    {path: 'listCuestionarios', component: ListCuestionarios2Component,
      loadChildren: () => import('./components/inicio/list-cuestionarios2/list-cuestionarios2.module')
                                      .then(x => x.ListCuestionarios2Module)}
  ]},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard],
      loadChildren: ()  => import('./components/dashboard/dashboard.module')
                                      .then(x => x.DashboardModule)},
  {path: '**', pathMatch:'full', redirectTo: '/inicio' },  //cuando ninguna ruta coincida que la redireccione a este
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
