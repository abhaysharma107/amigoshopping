import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/_service/cart.service';
import { CheckloginService } from 'src/app/_service/checklogin.service';
import { ProductsService } from 'src/app/_service/products.service';

@Component({
  selector: 'app-womens-wear',
  templateUrl: './womens-wear.component.html',
  styleUrls: ['./womens-wear.component.css']
})
export class WomensWearComponent implements OnInit {
  product:any=[];
  isLoggedIn=false;
  productNumberReturn:Array<any> = [];
  rzp1: any;
  constructor(private productsService: ProductsService,
    private cartService: CartService,
    private checkLoginService: CheckloginService,
    private toster: ToastrService,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    this.productsService.getProductsWomensWear().subscribe((data) => {
      this.product = data;
      if (this.isLoggedIn) {
        this.checkForInCart(this.product);
        }
    });
    this.checkLoginService.currentMessage.subscribe((message) => {
      this.isLoggedIn = message;
    });
    
  }
  checkForInCart(product: any) {
    this.cartService.cartItem().subscribe((data) => {
      let cartIds = [];
      for (let i = 0; i < data.length; i++) {
        cartIds.push(data[i]._id);
      }
      for (let i = 0; i < product.length; i++) {
        if (cartIds.indexOf(product[i]._id) >= 0) {
          this.productNumberReturn.push(cartIds.indexOf(product[i]._id));
        }
      }
    });
  }
  userSlectedCard(product: any) {
    this.router.navigateByUrl(`/home/productexplain?productId=${product}`);
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
          prefill: {
              name: "Gaurav Kumar",
              email: "gaurav.kumar@example.com",
              contact: "9999999999"
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
}
