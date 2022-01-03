import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Loguser } from '../_interface/loguser'

@Injectable({
  providedIn: 'root'
})
export class LogindataService {

  constructor(private http:HttpClient) { }

  login = environment.url + '/login'

  sendLoginData(login: Loguser){
    return this.http.post<any>(this.login, login)
  }

} 
