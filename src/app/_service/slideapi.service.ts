import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../_interface/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SlideapiService {

  userOnClickData:any=[]
  constructor(private http: HttpClient) { }
  getData():Observable<Product[]>{
    let url = "https://evening-forest-55820.herokuapp.com/RfRdWE5qzPocpdXNnKvEUiRY7yxF7QuLyeJ56wZkHh548HrG23pOkOTli2IJaqu9";
    return this.http.get<Product[]>(url)
    .pipe(
      map((res) => {
        console.log(res);
        return <Product[]> res
      })
    )
  }
}
