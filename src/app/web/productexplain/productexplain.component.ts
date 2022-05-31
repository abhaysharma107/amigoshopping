import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../_service/products.service';
import {Product} from '../../_interface/product'
import {CartService} from '../../_service/cart.service'
import { ToastrService } from 'ngx-toastr';
import { CheckloginService } from 'src/app/_service/checklogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productexplain',
  templateUrl: './productexplain.component.html',
  styleUrls: ['./productexplain.component.css']
})
export class ProductexplainComponent implements OnInit {
  product:any=[];
  title:any=[];
  des:any=[];
  img:any=[];
  isLoggedIn = false;
  inCart = false;
  constructor(
    private productService:ProductsService,
    private cartService:CartService,
    public toster:ToastrService,
    private checkLoginService: CheckloginService,
    private router:Router
    ) { 
    this.product = this.productService.userOnClickData;
    this.img = this.product.image;
    this.title = this.product.title;
    this.des = this.product.description;
  }

  ngOnInit(): void {
    this.checkLoginService.currentMessage.subscribe(message => {this.isLoggedIn = message})
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product).subscribe(data => {
      this.inCart = true;
      this.toster.success('Your product has been added to the cart!');
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
}
