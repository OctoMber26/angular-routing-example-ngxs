import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'shoes',
        loadChildren: () =>
          import('../shoes/shoes.module').then((m) => m.ShoesModule),
      },

      {
        path: 'shoes/:id',
        loadChildren: () =>
          import('../shoes/shoes-details/shoes-details.module').then(
            (m) => m.ShoesDetailsModule
          ),
      },

      {
        path: 'clothes',
        loadChildren: () =>
          import('../clothes/clothes.module').then((m) => m.ClothesModule),
      },
      {
        path: 'hardware',
        loadChildren: () =>
          import('../hardware/hardware.module').then((m) => m.HardwareModule),
      },
      { path: '', redirectTo: 'shoes', pathMatch: 'full' },
      { path: '**', redirectTo: 'shoes', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
