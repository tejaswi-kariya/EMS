import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './feature/home/dashboard/dashboard.component';
import { LoginFormComponent } from './feature/home/login/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { RegistrationComponent } from './feature/home/registration/registration.component';
import { EventListComponent } from './feature/home/dashboard/event-list/event-list.component';
import { AddEventComponent } from './feature/home/dashboard/add-event/add-event.component';

@NgModule({
  declarations: [
    AppComponent,
    
    LoginFormComponent,
    RegistrationComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
