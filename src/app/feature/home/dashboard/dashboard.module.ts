import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

import { EventListComponent } from "./event-list/event-list.component";
import { DashboardComponent } from "./dashboard.component";
import { AddEventComponent } from "./add-event/add-event.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [EventListComponent, DashboardComponent, AddEventComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  entryComponents: [AddEventComponent],
  providers: [],
})
export class DashboardModule {}
