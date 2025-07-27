import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./core/pages/home/home.component').then((c) => c.HomeComponent),
    title: 'Home Page',
  },
  {
    path: 'productList',
    loadComponent: () =>
      import('./Features/pages/product-list/product-list.component').then(
        (c) => c.ProductListComponent
      ),
    title: 'Product List',
  },
  {
    path: 'productDetails/:id',
    loadComponent: () =>
      import('./Features/pages/product-details/product-details.component').then(
        (c) => c.ProductDetailsComponent
      ),
    title: 'Product Details',
  },

  {
    path: '**',
    loadComponent: () =>
      import('./core/pages/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
    title: '404 Not Found',
  },
];
