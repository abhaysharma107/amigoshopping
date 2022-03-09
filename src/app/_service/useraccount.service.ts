import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserProfile } from '../_interface/userProfile';

@Injectable({
  providedIn: 'root'
})
export class UseraccountService {

  userProfile = environment.url + '/userProfile'

  constructor(private http:HttpClient) { }
  userData():Observable<UserProfile[]>{
    // console.log(localStorage.getItem('token'));
    
    return this.http.get<UserProfile[]>(this.userProfile, {
      headers: new HttpHeaders({
        'authorization': 'Bearer '+ localStorage.getItem('token'),
      })
    })
    .pipe(
      map((res) => {
        // console.log(res);
        return <UserProfile[]> res
      })
    )
  }
}
