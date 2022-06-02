import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../_interface/product';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'

function _window() : any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // products = environment.url + ''
  products = environment.url + '/products'
  electronic = environment.url + '/products/electronic'
  menswear = environment.url + '/products/mensclothing'
  womenswear = environment.url + '/products/womensclothing'
  jewelery = environment.url + '/products/jewelery'
  details = environment.url + '/products/details'
  orderId = environment.url + '/products/create/orderId'
  signature = environment.url + '/signature'

  constructor(private http: HttpClient) { }

  get nativeWindow() : any {
    return _window();
 }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.products)
    .pipe(
      map((res) => {
        // console.log(res);
        return <Product[]> res;
      })
    )
  }
  getProductsElectronic():Observable<Product[]>{
    return this.http.get<Product[]>(this.electronic)
    .pipe(
      map((res) => {
        // console.log(res);
        return <Product[]> res;
      })
    )
  }
  getProductsMensWear():Observable<Product[]>{
    return this.http.get<Product[]>(this.menswear)
    .pipe(
      map((res) => {
        // console.log(res);
        return <Product[]> res;
      })
    )
  }
  getProductsWomensWear():Observable<Product[]>{
    return this.http.get<Product[]>(this.womenswear)
    .pipe(
      map((res) => {
        // console.log(res);
        return <Product[]> res;
      })
    )
  }
  getProductsJewelery():Observable<Product[]>{
    return this.http.get<Product[]>(this.jewelery)
    .pipe(
      map((res) => {
        // console.log(res);
        return <Product[]> res;
      })
    )
  }
  getProductDetails(productId: any){
    return this.http.post<Product[]>(this.details, {productId:productId})
  }

  getOrderId(amount:number){
    return this.http.post<any>(this.orderId, {price:amount})
  }

  sendSignature(razorpay_order_id:any, razorpay_payment_id:any, razorpay_signature:any, productId:any){
    return this.http.post<any>(this.signature, {razorpay_order_id:razorpay_order_id, razorpay_payment_id:razorpay_payment_id, razorpay_signature:razorpay_signature, productId:productId},  {
      headers: new HttpHeaders({
        'authorization': 'Bearer '+ localStorage.getItem('token'),
      })
  })
}
}
