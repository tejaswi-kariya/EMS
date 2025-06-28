import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LoginFormComponent } from './login/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [DataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
