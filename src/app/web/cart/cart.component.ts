import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckloginService } from 'src/app/_service/checklogin.service';
import {CartService} from '../../_service/cart.service'

@Component({ 
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isLoggedIn = false
  items = this.cartService.getItems()

  constructor(
    private cartService:CartService,
    private checkLogin: CheckloginService,
    private router: Router
  ) {
    // this.checkLogin.currentMessage.subscribe(message => {this.isLoggedIn = message})
  }
  
  ngOnInit(): void {
  }

}
