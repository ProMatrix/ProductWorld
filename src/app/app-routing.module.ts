import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../app/product-list/product-list.component';
import { AddToCartComponent } from '../app/add-to-cart/add-to-cart.component';

const routes: Routes = [
  { path: 'list', component: ProductListComponent },
  { path: 'cart', component: AddToCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
