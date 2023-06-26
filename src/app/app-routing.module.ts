import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { productsGuard } from './components/products/products.guard';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./components/about/about.module').then((m) => m.AboutModule),
  },

  {
    path: 'products',
    loadChildren: () =>
      import('./components/products/products.module').then(
        (m) => m.ProductsModule
      ),
    canActivate: [productsGuard],
  },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  {
    path: 'contact',
    loadChildren: () =>
      import('./components/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },

  { path: '**', redirectTo: 'about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
