import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SlideapiService {

  userOnClickData:any=[]
  constructor(private http: HttpClient) { }
  getData(){
    let url = "https://fakestoreapi.com/products"
    return this.http.get(url)
  }
}
