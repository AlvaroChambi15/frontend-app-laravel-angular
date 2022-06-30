import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// habilitar este htttp module
import { HttpClientModule } from '@angular/common/http'

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

import { ReactiveFormsModule } from '@angular/forms';

// IMPORTANTO CORE MODULE PARA UTILIZAR TODOS LOS SERVICIOS
import { CoreModule } from './../core/core.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class AuthModule { }
