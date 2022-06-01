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
  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    public toster: ToastrService,
    private checkLoginService: CheckloginService,
    private router: Router,
    private activedRouter: ActivatedRoute
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
      console.log('Ok You can buy it now');
    } else {
      this.toster.warning('Please Login First');
      this.router.navigate(['/login']);
    }
  }
}
