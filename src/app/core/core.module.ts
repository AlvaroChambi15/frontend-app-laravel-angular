import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { CategoriaService } from './services/categoria.service';
import { ProductoService } from './services/producto.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    AuthService,
    CategoriaService,
    ProductoService
  ]
})
export class CoreModule { }
