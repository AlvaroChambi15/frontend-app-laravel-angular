import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from '../app.main.component';
import { AuthGuard } from '../guards/auth.guard';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {
    path:'',
    component: AppMainComponent,
    children: [
      {
        path: "perfil", 
        component: PerfilComponent,
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
