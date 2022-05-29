import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CheckloginService } from 'src/app/_service/checklogin.service';
import { RecoveryOTPService } from 'src/app/_service/recovery-otp.service';

@Component({
  selector: 'app-recovery-otp',
  templateUrl: './recovery-otp.component.html',
  styleUrls: ['./recovery-otp.component.css']
})
export class RecoveryOTPComponent implements OnInit {

  otp:any
  isLoggedIn = false;
  constructor(
    private fb:FormBuilder,
    private route:Router,
    private otpveryservice:RecoveryOTPService,
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
    this.toastr.info('Please Wait, Processing')
    this.otpveryservice.sendOTP(this.otp.value).subscribe(data => {
      console.log(data);
      if (data[0] === 'Verified') {
        this.toastr.success('Success')
        this.route.navigate(['/newpassword'])
      } else {
        console.log(true);
        
        this.toastr.error('Wrong OTP')
      }
    })
  }

}
