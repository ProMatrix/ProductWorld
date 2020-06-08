import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService, CartItem } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(readonly router: Router, readonly service: ProductServiceService) { }

  ngOnInit(): void {
  }

  onClickAdd(productId: number){
    this.service.cartProduct = this.service.products.find(x => { return x.id === productId});
    this.service.cartItem = <CartItem>{ productId, quantity: 1, zipcode: 0, customFields: this.service.cartProduct.customFields };
    this.router.navigate(['cart']);
  }

}
