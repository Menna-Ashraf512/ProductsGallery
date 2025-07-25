import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:"home" , loadComponent: () => import('./core/pages/home/home.component').then( c => c.HomeComponent),title:'Home page'},
    {path:"productList" , loadComponent: () => import('./Features/pages/product-list/product-list.component').then( c => c.ProductListComponent),title:'Product List'},
    {path:"productDetails" , loadComponent: () => import('./Features/pages/product-details/product-details.component').then( c => c.ProductDetailsComponent),title:'Product Details'},
    {path:"cart" , loadComponent: () => import('./Features/pages/cart/cart.component').then( c => c.CartComponent),title:'Cart'},
    {path:"wishList" , loadComponent: () => import('./Features/pages/wish-list/wish-list.component').then( c => c.WishListComponent),title:'wishList'},

];
