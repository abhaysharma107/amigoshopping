import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OTP } from '../_interface/OTP';

@Injectable({
  providedIn: 'root'
})
export class RecoveryOTPService {
  otp = environment.url + '/recoverAccount/otp'

  // private otpSource = new BehaviorSubject(false)
  // currentOtp = this.otpSource.asObservable()
  constructor(private http:HttpClient) { }

  sendOTP(otp: OTP){
    return this.http.post<any>(this.otp, otp)
  }
}
