import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { CategoriaService } from './services/categoria.service';
import { ProductoService } from './services/producto.service';
import { ClienteService } from './services/cliente.service';
import { PedidoService } from './services/pedido.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    CategoriaService,
    ProductoService,
    ClienteService,
    PedidoService
  ]
})
export class CoreModule { }
