import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductServiceService, CartItem } from '../product-service.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  cartItemForm: FormGroup;
  cartItem = new CartItem();

  constructor(readonly router: Router, readonly service: ProductServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cartItemForm = this.fb.group({
      productId: this.service.cartItem.productId,
      zipcode: [this.service. zipcode, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      quantity: [1, [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],
      customFields: this.service.cartProduct.customFields
    });
  }

  onClickSave(){
    console.log('Saved: ' + JSON.stringify(this.cartItemForm.value));
    this.service.zipcode = this.cartItemForm.controls.zipcode.value;
    this.router.navigate(['list']);
  }

}
