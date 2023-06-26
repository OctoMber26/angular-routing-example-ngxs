import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoesRoutingModule } from './shoes-routing.module';
import { ShoesComponent } from './shoes.component';

@NgModule({
  declarations: [ShoesComponent],
  imports: [CommonModule, ShoesRoutingModule],
})
export class ShoesModule {}
