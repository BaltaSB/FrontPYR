import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

//Interceptors
import {AddTokenInterceptor} from '../app/helpers/add-token.interceptor'

//Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { CuestionariosComponent } from './components/dashboard/cuestionarios/cuestionarios.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { NuevoCuestionarioComponent } from './components/cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component';

import { NuevaPreguntaComponent } from './components/cuestionarios/nuevo-cuestionario/paso-dos/nueva-pregunta/nueva-pregunta.component';
import { PasoDosComponent } from './components/cuestionarios/nuevo-cuestionario/paso-dos/paso-dos.component';
import { PasoUnoComponent } from './components/cuestionarios/nuevo-cuestionario/paso-uno/paso-uno.component';
import { ListCuestionariosComponent } from './components/cuestionarios/list-cuestionarios/list-cuestionarios.component';
import { CuestionarioComponent } from './components/cuestionarios/cuestionario/cuestionario.component';
import { ListCuestionarios2Component } from './components/inicio/list-cuestionarios2/list-cuestionarios2.component';
import { IngresarNombreComponent } from './components/inicio/ingresar-nombre/ingresar-nombre.component';
import { PreguntaComponent } from './components/inicio/pregunta/pregunta.component';
import { RespuestaCuestrionarioComponent } from './components/inicio/respuesta-cuestrionario/respuesta-cuestrionario.component';





@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CambiarPasswordComponent,
    CuestionariosComponent,
    NavbarComponent,
    LoadingComponent,
    NuevoCuestionarioComponent,
    PasoDosComponent,
    PasoUnoComponent,
    NuevaPreguntaComponent,
    ListCuestionariosComponent,
    CuestionarioComponent,
    ListCuestionarios2Component,
    IngresarNombreComponent,
    PreguntaComponent,
    RespuestaCuestrionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
