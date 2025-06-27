import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedRoutingModule } from './shared-routing.module';
import { CustomMaterialModule } from './custom-material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomMaterialModule, FlexLayoutModule,
    FormsModule, HttpClientModule,
    SharedRoutingModule
  ],
  exports: [  CommonModule, FlexLayoutModule,
    FormsModule, HttpClientModule,
    CustomMaterialModule]
})
export class SharedModule { }
