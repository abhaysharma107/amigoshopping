import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CheckloginService } from 'src/app/_service/checklogin.service';
import { RecoverAccountService } from 'src/app/_service/recover-account.service';

@Component({
  selector: 'app-recover-account',
  templateUrl: './recover-account.component.html',
  styleUrls: ['./recover-account.component.css']
})
export class RecoverAccountComponent implements OnInit {

  recoverAccountForm:any
  isLoggedIn = false;
  constructor(
    private fb:FormBuilder,
    private route:Router,
    private recoverAccountService: RecoverAccountService,
    private toastr: ToastrService,
    private checkLogin:CheckloginService,
  ) { }

  ngOnInit(): void {
    this.recoverAccountForm = this.fb.group({
      Email: ['', [
        Validators.required
      ]]
    })
  }
  get Email() {return this.recoverAccountForm.get('Email');}

  onSubmit(){
    console.log(this.recoverAccountForm.value);
    this.toastr.info('Please Wait, Processing')
    this.recoverAccountService.sendLoginData(this.recoverAccountForm.value).subscribe(data => {
      console.log(data);
      
     if (data[0] === 'Verify OTP') {
      this.toastr.info('OTP Sent Successfully')
       this.route.navigate(['/recoveryOTP'])
     }
    })
  }
}

