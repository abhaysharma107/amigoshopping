import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SigndataService } from 'src/app/_service/signdata.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup:any
  constructor(
    private fb:FormBuilder,
    private signupDataSend:SigndataService) { }
 
  ngOnInit(): void {
    this.signup = this.fb.group({
      firstname:['',[
        Validators.required
      ]],
      emailform: ['',[
        Validators.required,Validators.email
      ]],
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
    })
  }

  onSubmit(){
    console.log(this.signup.value);
    this.signupDataSend.sendSignUpData(this.signup.value).subscribe(
      data => console.log('success', data),
      error => console.error('error', Error)
      
    )
  }
  get firstname() {return this.signup.get('firstname');}
  get emailform() {return this.signup.get('emailform');}
  get address() {return this.signup.get('address');}
  get city() {return this.signup.get('city');}
  get state() {return this.signup.get('state');}
  get pincode() {return this.signup.get('pincode');}

}
