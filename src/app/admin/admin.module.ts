import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CoreModule } from '../core/core.module';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';
import { ProductoComponent } from './components/producto/producto.component';


@NgModule({
  declarations: [
    PerfilComponent,
    CategoriaComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    PrimengModule
  ]
})
export class AdminModule { }
