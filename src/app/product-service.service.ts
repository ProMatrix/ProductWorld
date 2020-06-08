import { Injectable } from '@angular/core';

export class CustomField {
  label: string;
  fieldName: string;
}

export class CartItem {
  productId: number;
  quantity: number;
  zipcode: number;
  customFields?: Array<CustomField>;
}
export class Product {
  id: number;
  productType: number;
  name: string;
  price: number;
  customFields: Array<CustomField>;
}

const products = [
  {
    id: 1,
    productType: 1,
    name: 'Novelty T',
    price: 5.5,
    customFields: []
  },
  {
    id: 2,
    productType: 2,
    name: 'Coffee Mug',
    price: 1,
    customFields: [
      { label: 'Inscription', fieldName: 'inscription' }
    ]
  },
  {
    id: 3,
    productType: 2,
    name: 'Dog Tag',
    price: 1.23,
    customFields: [
      { label: 'Front Engraving', fieldName: 'front' },
      { label: 'Back Engraving', fieldName: 'back' }
    ]
  },
  {
    id: 4,
    productType: 2,
    name: 'Candy Corn',
    price: 0.5,
    customFields: [
      { label: 'Top', fieldName: 'topColor' },
      { label: 'Middle', fieldName: 'middleColor' },
      { label: 'Bottom', fieldName: 'bottomColor' }
    ]
  },
];

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
products = Array<Product>();
cartProduct: Product;
cartItems = Array<CartItem>();
cartItem: CartItem;
zipcode = '';

  constructor() {
    this.products = products;
   }

   formatPrice(price: number): string {
     return "$" + price.toFixed(2);
   }
}
