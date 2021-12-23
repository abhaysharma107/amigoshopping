import { Component, OnInit } from '@angular/core';
import { SlideapiService } from '../../_service/slideapi.service';
import {Product} from '../../_interface/product'
import {CartService} from '../../_service/cart.service'

@Component({
  selector: 'app-productexplain',
  templateUrl: './productexplain.component.html',
  styleUrls: ['./productexplain.component.css']
})
export class ProductexplainComponent implements OnInit {
  data:any=[];
  title:any=[];
  des:any=[];
  img:any=[];
  constructor(
    private list:SlideapiService,
    private cartService:CartService
    ) { 
    this.data = this.list.userOnClickData;
    this.img = this.data.image;
    this.title = this.data.title;
    this.des = this.data.description;
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {
  }
}
