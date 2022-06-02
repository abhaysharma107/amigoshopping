import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CheckloginService } from './_service/checklogin.service';
import { UseraccountService } from './_service/useraccount.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private userAccountService:UseraccountService, private checkLoginService:CheckloginService){}

  ngOnInit(): void {
    this.userAccountService.getAccount().subscribe(data => {
      // console.log(data);
      if (data.auth == true) {
        this.checkLoginService.changeMessage(true)
      } else{
        this.checkLoginService.changeMessage(false)
        localStorage.clear()
      }
    })
  }
}