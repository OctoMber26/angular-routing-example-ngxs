import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoesDetailsComponent } from './shoes-details.component';

const routes: Routes = [{ path: '', component: ShoesDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoesDetailsRoutingModule {}
