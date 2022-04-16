import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LogindataService } from 'src/app/_service/logindata.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CheckloginService } from 'src/app/_service/checklogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any
  hide = true;
  isLoggedIn = false

  constructor(
    private fb: FormBuilder,
    private loginDataSend: LogindataService,
    private route: Router,
    private toastr: ToastrService,
    private checkLogin: CheckloginService
  ) {

  }

  ngOnInit(): void {
    this.login = this.fb.group({
      emailform: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }

  onSubmit() {
    // console.log(this.login.value);
    this.toastr.info('Please Wait, Processing')
    console.time()
    this.loginDataSend.sendLoginData(this.login.value).subscribe(
      data => {
       console.timeEnd()
        this.isLoggedIn= true
        this.checkLogin.changeMessage(this.isLoggedIn)
        this.toastr.success('Logged In');
        this.route.navigate(['/home'])
        let token = Object.values(data)
        localStorage.setItem('token', data.token)
      },
      error => {
        if (error.error.message == 'Email is not registered') {
          this.toastr.warning('Email is not registered');
        } else if (error.error.message == 'Wrong password.') {
          this.toastr.error('Wrong password');
        }
      }
    )
  }

  get emailform() { return this.login.get('emailform'); }
}
