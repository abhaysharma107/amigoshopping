import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangedPasswordService {

  changedPassword = environment.url + '/changedPassword'

  constructor(private http:HttpClient) { }

  sendChangedPassword(changedPassword:any){
  return  this.http.post<any>(this.changedPassword, changedPassword)
  }
}
