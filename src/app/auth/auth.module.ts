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

//PARA PRIMENG
import { PrimengModule } from '../primeng/primeng.module';
import { ResetComponent } from './components/reset/reset.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    ResetComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
    PrimengModule
  ]
})
export class AuthModule { }
