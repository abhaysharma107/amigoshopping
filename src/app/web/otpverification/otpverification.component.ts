import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CheckloginService } from 'src/app/_service/checklogin.service';
import { OtpverifyService } from 'src/app/_service/otpverify.service';

@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.component.html',
  styleUrls: ['./otpverification.component.css']
})
export class OtpverificationComponent implements OnInit {
  otp:any
  isLoggedIn = false;
  constructor(
    private fb:FormBuilder,
    private route:Router,
    private otpveryservice:OtpverifyService,
    private toastr: ToastrService,
    private checkLogin:CheckloginService,
  ) { }

  ngOnInit(): void {
    this.otp = this.fb.group({
      otpinputed: ['', [
        Validators.required
      ]]
    })
  }
  get otpinputed() {return this.otp.get('otpinputed');}

  onSubmit(){
    console.log(this.otp.value);
    this.otpveryservice.sendOTP(this.otp.value).subscribe(data => {
      console.log(data);
      
      if (data.token) {
        this.isLoggedIn= true;
        console.log(data);
        this.checkLogin.changeMessage(this.isLoggedIn)
        this.toastr.success('Account Created');
        this.route.navigate(['/home'])
        let token = Object.values(data)
        localStorage.setItem('token', data.token)
      }
    }, error => {
      console.log(error);
      if (error.status === 400) {
        this.toastr.error('Wrong OTP')
      }
      if (error.status === 422) {
        this.toastr.error('Email Already Registered')
      }
    })
  }
}
