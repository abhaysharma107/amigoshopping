import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckloginService {

  private messageSource = new BehaviorSubject(this.logedIn());
  currentMessage = this.messageSource.asObservable();

  constructor() { }
 
  changeMessage(message: boolean) {
    this.messageSource.next(message)
  }

  logedIn(){
    return !!localStorage.getItem('token')
  }
}