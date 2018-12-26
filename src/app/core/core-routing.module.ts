import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './home-page/home-page.module#HomePageModule'},
  {path: 'home', loadChildren: './home-page/home-page.module#HomePageModule'},
  {path: 'products', loadChildren: './product-list-page/product-list-page.module#ProductListPageModule'},
  {path: 'products/:id', loadChildren: './product-details-page/product-details-page.module#ProductDetailsPageModule'},
  {path: '**', loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
