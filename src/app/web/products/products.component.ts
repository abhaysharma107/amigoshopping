import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/_service/cart.service';
import { SlideapiService } from '../../_service/slideapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data:any=[];
  
  constructor(private list: SlideapiService,
    private cartService: CartService) {
    this.list.getData().subscribe(data =>{
      this.data = data;
    
    })
  }

  ngOnInit(): void {
  }
  userSlectedCard(datas:any){
    this.list.userOnClickData = datas
  }
  addToCard(data: any){
    this.cartService.addToCart(data).subscribe(data => {
      console.log(data);
      
    })
    window.alert('Your product has been added to the cart!');
  }
}
