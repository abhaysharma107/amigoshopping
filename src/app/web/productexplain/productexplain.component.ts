import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../_service/products.service';
import { Product } from '../../_interface/product';
import { CartService } from '../../_service/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CheckloginService } from 'src/app/_service/checklogin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productexplain',
  templateUrl: './productexplain.component.html',
  styleUrls: ['./productexplain.component.css'],
})
export class ProductexplainComponent implements OnInit {
  product: any = [];
  title: any = [];
  des: any = [];
  img: any = [];
  _id: any = '61c46757fdd2c4388f5da1d5';
  isLoggedIn = false;
  inCart = false;
  rzp1: any;
  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    public toster: ToastrService,
    private checkLoginService: CheckloginService,
    private router: Router,
    private activedRouter: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activedRouter.queryParamMap.subscribe((params) => {
      if (params.get('productId')) {
        this._id = params.get('productId');
      }
      if (this._id) {
        this.getProductDetails();
      }
    });
    this.checkLoginService.currentMessage.subscribe((message) => {
      this.isLoggedIn = message;
    });

    if (this.isLoggedIn) {
      this.cartService.cartItem().subscribe((data) => {
        let cartIds = [];
        for (let i = 0; i < data.length; i++) {
          cartIds.push(data[i]._id);
        }
        if (cartIds.includes(this._id)) {
          this.inCart = true;
        }
      });
    }
  }
  getProductDetails() {
    this.productService.getProductDetails(this._id).subscribe((data) => {
      this.product = data[0];
      this._id = this.product._id;
      this.des = this.product.description;
      this.title = this.product.title;
      this.img = this.product.image;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product).subscribe((data) => {
      this.inCart = true;
      this.toster.success('Your product has been added to the cart!');
    });
  }

  buyNow(data: any) {
    if (this.isLoggedIn == true) {
      this.productService.getOrderId(data.price).subscribe(orderId => {
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
            this.productService.sendSignature(response.razorpay_payment_id,response.razorpay_order_id,response.razorpay_signature, data._id).subscribe(data =>{
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
        this.rzp1 = new this.productService.nativeWindow.Razorpay(options);
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
