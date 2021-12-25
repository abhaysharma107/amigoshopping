import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_interface/user';

@Injectable({
  providedIn: 'root'
})
export class SigndataService {

  url = 'http://localhost:8080/signup'
  constructor(private http:HttpClient) { }

  sendSignUpData(user: User){
    return this.http.post<any>(this.url, user)
  }
}
