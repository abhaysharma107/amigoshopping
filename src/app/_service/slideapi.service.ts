import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../_interface/product';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SlideapiService {
  
  userOnClickData:any=[]
  products = environment.url + '/products'
  constructor(private http: HttpClient) { }
  getData():Observable<Product[]>{
    return this.http.get<Product[]>(this.products)
    .pipe(
      map((res) => {
        // console.log(res);
        return <Product[]> res
      })
    )
  }
}
