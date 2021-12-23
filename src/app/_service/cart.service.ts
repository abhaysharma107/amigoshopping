import { Injectable } from '@angular/core';
import { Product } from '../_interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  item:Product[]=[]

  addToCart(product: Product) {
    this.item.push(product);
    console.log(this.item);
    
  }

  getItems() {
    return this.item;
  }

  clearCart() {
    this.item = [];
    return this.item;
  }
}
