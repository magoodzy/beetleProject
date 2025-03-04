import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Core/guards/Auth/auth.guard';
import { LoginGuard } from './Core/guards/Login/login.guard';

const routes: Routes = [

  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./Modules/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./Modules/authentication/authentication.module').then((m) => m.AuthenticationModule),
    canActivate: [LoginGuard]
  },

  {
    path: 'task',
    loadChildren: () => import('./Modules/task/task.module').then((m) => m.TaskModule),
    canActivate: [AuthGuard]
  },
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
