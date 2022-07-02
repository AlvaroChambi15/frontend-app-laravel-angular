import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Not404Component } from './errors/not404/not404.component';
import { AuthGuard } from './guards/auth.guard';
import { InicioComponent } from './inicio/inicio.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // PARA COMPONENTES
      {
        path: '',
        component: InicioComponent
      },
      // PARA MODULOS
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {    
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]    
  },
  {path: 'noExiste', component: Not404Component},
  {path: '**', redirectTo: 'noExiste'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
