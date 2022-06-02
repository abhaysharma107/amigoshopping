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
  rzp1: any;

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
      // console.log(data);
      
    })
  }
  buyNow(data: any) {
    if (this.isLoggedIn == true) {
      this.productsService.getOrderId(data.price).subscribe(orderId => {
        console.log(orderId);
        let options = {
          key: "rzp_test_lpypW4eeQg5R6n", 
          amount: data.price * 100, 
          currency: "INR",
          name: "AmigoShopping",
          description: "Test Transaction",
          image: "",
          order_id: orderId.orderId, 
          handler: (response:any) =>{
            this.productsService.sendSignature(response.razorpay_payment_id,response.razorpay_order_id,response.razorpay_signature, data._id).subscribe(data =>{
              if (data.status == true) {
                alert('Your Order Has Been Placed')
              }
            })
        },
          notes: {
              address: "Razorpay Corporate Office"
          },
          theme: {
              color: "#3399cc"
          }
      }
        this.rzp1 = new this.productsService.nativeWindow.Razorpay(options);
        this.rzp1.open();
        this.rzp1.on('payment.failed', (response: any) => {
          // alert(response.error.code);
          alert(response.error.description);
          // alert(response.error.source);
          // alert(response.error.step);
          // alert(response.error.reason);
          // alert(response.error.metadata.order_id);
          // alert(response.error.metadata.payment_id);
        });
      })
      
    } else {
      this.toster.warning('Please Login First');
      this.router.navigate(['/login']);
    }
  }
  userSlectedCard(product:any){
    this.router.navigateByUrl(`/home/productexplain?productId=${product}`);
  }
}
