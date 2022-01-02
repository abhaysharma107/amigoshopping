import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LogindataService } from 'src/app/_service/logindata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any
  hide = true;

  constructor(
    private fb: FormBuilder,
    private loginDataSend: LogindataService
  ) {
  
   }

  ngOnInit(): void {
    this.login = this.fb.group({
      emailform: ['', [
        Validators.required, Validators.email
      ]],
      password:['',[
        Validators.required
      ]]
    })
  }

  onSubmit(){
    console.log(this.login.value);
    this.loginDataSend.sendLoginData(this.login.value).subscribe(
      data => console.log('success', data),
      error => console.error('error', Error)
      
    )
  }

  get emailform() {return this.login.get('emailform');}
}
