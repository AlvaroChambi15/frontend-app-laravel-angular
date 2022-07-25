import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CoreModule } from '../core/core.module';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';
import { ProductoComponent } from './components/producto/producto.component';
import { ListaPedidoComponent } from './components/pedido/lista-pedido/lista-pedido.component';
import { NuevoPedidoComponent } from './components/pedido/nuevo-pedido/nuevo-pedido.component';
import { MostrarPedidoComponent } from './components/pedido/mostrar-pedido/mostrar-pedido.component';
import { IndexPedidoComponent } from './components/pedido/index-pedido/index-pedido.component';
import { ReportePdfComponent } from './components/pedido/reporte-pdf/reporte-pdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    PerfilComponent,
    CategoriaComponent,
    ProductoComponent,
    ListaPedidoComponent,
    NuevoPedidoComponent,
    MostrarPedidoComponent,
    IndexPedidoComponent,
    ReportePdfComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    PrimengModule,
    PdfViewerModule
  ]
})
export class AdminModule { }
