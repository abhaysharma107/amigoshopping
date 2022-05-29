import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CheckloginService } from 'src/app/_service/checklogin.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  isLoggedIn = false
  constructor(
    private toster:ToastrService,
    private checkLogin: CheckloginService,
    private router: Router,
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
  ngOnInit(): void {
    
  }
}
