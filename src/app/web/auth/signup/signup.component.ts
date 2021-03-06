import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SigndataService } from 'src/app/_service/signdata.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CheckloginService } from 'src/app/_service/checklogin.service';
import { OtpverifyService } from 'src/app/_service/otpverify.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent?.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup:any
  hide = true;
  isLoggedIn = false;
  matcher = new MyErrorStateMatcher();
  constructor(
    private fb:FormBuilder,
    private signupDataSend:SigndataService,
    private route:Router,
    private toastr: ToastrService,
    private checkLogin: CheckloginService,
    private otpService:OtpverifyService
    ) { }
 
  ngOnInit(): void {
    this.signup = this.fb.group({
      firstname:['',[
        Validators.required
      ]],
      lastname:[''],
      emailform: ['',[
        Validators.required,Validators.email
      ]],
      password:['',[
        Validators.required, Validators.minLength(6)
      ]],
      confirmPassword: [''],
      address:['',[
         Validators.required
      ]],
      city:['',[
         Validators.required
      ]],
      state:['',[
         Validators.required
      ]],
      pincode:['',[
         Validators.required
      ]],
    },
    { validator: this.checkPasswords })
  } 

  onSubmit(){
    // console.log(this.signup.value);
    this.toastr.info('Please Wait, Processing')
    this.signupDataSend.sendSignUpData(this.signup.value).subscribe(
      data =>  {
        // console.log(data);
        this.toastr.info("OTP Sent Scuccessfully")
          this.route.navigate(['/otpverification'])
      }, 
      error =>{
        if (error.status == 422) {
          this.toastr.error('Email already registered');
        } else {
          this.toastr.error("Something went wrong")
        }
      }
      
    )
  }
  get firstname() {return this.signup.get('firstname');}
  get lastname() {return this.signup.get('lastname');}
  get emailform() {return this.signup.get('emailform');}
  get password() {return this.signup.get('password');}
  get address() {return this.signup.get('address');}
  get city() {return this.signup.get('city');}
  get state() {return this.signup.get('state');}
  get pincode() {return this.signup.get('pincode');}

  checkPasswords(group: FormGroup) { 
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }
}
