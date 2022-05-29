import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/_service/cart.service';
import { CheckloginService } from 'src/app/_service/checklogin.service';
import { ProductsService } from '../../../_service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product:any=[];
  isLoggedIn=false;
  constructor(private productsService: ProductsService,
    private cartService: CartService,
    private checkLoginService: CheckloginService,
    private toster: ToastrService,
    private router: Router
    ) {
    this.productsService.getProducts().subscribe(data =>{
      this.product = data;
    })
    this.checkLoginService.currentMessage.subscribe(message => {this.isLoggedIn = message})
  }

  ngOnInit(): void {
  }
  userSlectedCard(datas:any){
    this.productsService.userOnClickData = datas
  }
  addToCard(data: any){
    if (this.isLoggedIn == true) {
      this.cartService.addToCart(data).subscribe(data => {
        console.log(data);
      })
      window.alert('Your product has been added to the cart!');
    }
    else {
      this.toster.warning("Please Login First")
      this.router.navigate(['/login'])
    }
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
