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
 productNumberReturn:Array<any> = [];
  constructor(private productsService: ProductsService,
    private cartService: CartService,
    private checkLoginService: CheckloginService,
    private toster: ToastrService,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data =>{
      this.product = data;
    })
    this.checkLoginService.currentMessage.subscribe(message => {this.isLoggedIn = message})
    this.cartService.cartItem().subscribe(data => {
      let cartIds = []
      for (let i = 0; i < data.length; i++) {
        cartIds.push(data[i]._id)
      }
      sessionStorage.setItem('cartIds', JSON.stringify(cartIds))
    })
  }
  userSlectedCard(datas:any){
    this.productsService.userOnClickData = datas
  }
  addToCard(data: any, productNumber:number){
    if (this.isLoggedIn == true) {
      this.cartService.addToCart(data).subscribe(data => {
        this.productNumberReturn.push(productNumber);
        this.toster.success('Your product has been added to the cart!');
      })
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
