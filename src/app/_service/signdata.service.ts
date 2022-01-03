import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../_interface/user';

@Injectable({
  providedIn: 'root'
})
export class SigndataService {

  signup = environment.url + '/signup'
  constructor(private http:HttpClient) { }

  sendSignUpData(user: User){
    return this.http.post<any>(this.signup, user)
  }
}
