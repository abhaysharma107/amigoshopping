import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../_interface/product';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'

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

  constructor(private http: HttpClient) { }
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
}
