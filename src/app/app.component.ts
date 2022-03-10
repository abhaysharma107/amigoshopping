import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CheckloginService } from './_service/checklogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false
  constructor(
    private toster:ToastrService,
    private checkLogin: CheckloginService,
    private router: Router
  ){
    this.checkLogin.currentMessage.subscribe(message => {this.isLoggedIn = message})
  }

  logout(){
    this.isLoggedIn = false;
    localStorage.removeItem('token')
    this.checkLogin.changeMessage(this.isLoggedIn)
    this.toster.success("Logged Out Successfully")
    this.router.navigate(['/home'])
  }
  checkLoginForCart(){
    if (this.isLoggedIn == true) {
      this.router.navigate(['/cart'])
    }
    else{
      this.toster.warning("Please Login First")
      this.router.navigate(['/login'])
    }
  }
}
