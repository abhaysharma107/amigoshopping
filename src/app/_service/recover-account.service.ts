import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RecoverWithEmail } from '../_interface/recoverWithEmail';

@Injectable({
  providedIn: 'root'
})
export class RecoverAccountService {
  recover = environment.url + '/recoverAccount'

  constructor(private http:HttpClient) { }
  sendLoginData(recoverWithEmail: RecoverWithEmail){
    return this.http.post<any>(this.recover, recoverWithEmail)
  }
}
