import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoesDetailsRoutingModule } from './shoes-details-routing.module';
import { ShoesDetailsComponent } from './shoes-details.component';


@NgModule({
  declarations: [
    ShoesDetailsComponent
  ],
  imports: [
    CommonModule,
    ShoesDetailsRoutingModule
  ]
})
export class ShoesDetailsModule { }
