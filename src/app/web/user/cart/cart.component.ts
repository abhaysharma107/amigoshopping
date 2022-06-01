import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CheckloginService } from 'src/app/_service/checklogin.service';
import { ProductsService } from 'src/app/_service/products.service';
import {CartService} from '../../../_service/cart.service'

@Component({ 
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isLoggedIn = false;
  cartItem:any; 

  constructor(
    private cartService:CartService,
    private checkLogin: CheckloginService,
    private productsService:ProductsService,
    private router: Router,
    public toster:ToastrService
  ) {
    // this.checkLogin.currentMessage.subscribe(message => {this.isLoggedIn = message})
  }
  
  ngOnInit(): void {
    this.cartService.cartItem().subscribe(data => {
      this.cartItem = data;
      console.log(data);
      
    })
  }
  buyNow(data:any){
    if (this.isLoggedIn == true) {
      console.log("Ok You can buy it now");
    }
    else {
      this.toster.warning("Please Login First")
      this.router.navigate(['/login'])
    }
  }
  userSlectedCard(data:any){
    this.productsService.userOnClickData = data
  }
}
