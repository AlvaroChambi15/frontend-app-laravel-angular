import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from '../app.main.component';
import { AuthGuard } from '../guards/auth.guard';
import { CategoriaComponent } from './components/categoria/categoria.component';
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
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
