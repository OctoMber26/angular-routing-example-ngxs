import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HardwareRoutingModule } from './hardware-routing.module';
import { HardwareComponent } from './hardware.component';


@NgModule({
  declarations: [
    HardwareComponent
  ],
  imports: [
    CommonModule,
    HardwareRoutingModule
  ]
})
export class HardwareModule { }
