import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{
  path: '',
    component: DashboardComponent,
    children: [{
     path: "event-list", component: EventListComponent, canActivate: [AuthGuard]
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
