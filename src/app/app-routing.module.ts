import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './feature/home/login/login-form.component';
import { DashboardComponent } from './feature/home/dashboard/dashboard.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes =  [{
  path: '', pathMatch: 'full', redirectTo: 'home'
}, {
    path: 'home',
    component: LoginFormComponent
   },
   {
     path: 'dashboard',
     loadChildren: 'src/app/feature/home/dashboard/dashboard.module#DashboardModule' 
    
   }
   /* ,
   {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
   },  */
];
@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
