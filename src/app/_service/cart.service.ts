import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../_interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  
  updateCart =  environment.url + '/updatecart';
  getCart = environment.url + '/getcart';

  addToCart(product: Product) {
    return this.http.post<any>(this.updateCart, product, {
      headers: new HttpHeaders({
        'authorization': 'Bearer '+ localStorage.getItem('token'),
      })
    })
  }

  cartItem() {
    return this.http.get<any>(this.getCart,  {
      headers: new HttpHeaders({
        'authorization': 'Bearer '+ localStorage.getItem('token'),
      })
    })
  }

  // clearCart() {
  //   this.item = [];
  //   return this.item;
  // }
  
}
