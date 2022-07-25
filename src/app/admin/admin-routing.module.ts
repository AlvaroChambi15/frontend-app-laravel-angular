import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from '../app.main.component';
import { AuthGuard } from '../guards/auth.guard';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { IndexPedidoComponent } from './components/pedido/index-pedido/index-pedido.component';
import { ListaPedidoComponent } from './components/pedido/lista-pedido/lista-pedido.component';
import { MostrarPedidoComponent } from './components/pedido/mostrar-pedido/mostrar-pedido.component';
import { NuevoPedidoComponent } from './components/pedido/nuevo-pedido/nuevo-pedido.component';
import { ReportePdfComponent } from './components/pedido/reporte-pdf/reporte-pdf.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {
    path: '', component: AppMainComponent,
    children: [
      {
        path: "perfil",
        component: PerfilComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "categoria",
        component: CategoriaComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "producto",
        component: ProductoComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "pedido",
        component: IndexPedidoComponent,
        children: [
          {
            path: "",
            component: ListaPedidoComponent
          },
          {
            path: "nuevo",
            component: NuevoPedidoComponent
          },
          {
            path: ":reporte-pdf",
            component: ReportePdfComponent
          },
          {
            path: ":id",
            component: MostrarPedidoComponent
          }

        ]
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
