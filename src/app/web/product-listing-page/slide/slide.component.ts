import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../_service/products.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  product:any = [];
  data_1:any = [];
  data_2:any =[];
  data_3:any = [];
  title_0:any = [];
  title_1:any = [];
  title_2:any = [];
  des_0:any = [];
  des_1:any = [];
  des_2:any = [];
  image_0:any =[];
  image_1:any = [];
  image_2:any = [];

  constructor(private productSerivce:ProductsService) {
    this.productSerivce.getProducts().subscribe(data =>{
      this.product = data;
      this.data_1 = this.product[0]
      this.data_2 = this.product[1]
      this.data_3 = this.product[2]
      this.title_0= this.product[0].title;
      this.title_1 = this.product[1].title;
      this.title_2 = this.product[2].title;
      this.des_0 = this.product[0].description;
      this.des_1 = this.product[1].description;
      this.des_2 = this.product[2].description;
      this.image_0 = this.product[0].image;
      this.image_1 = this.product[1].image;
      this.image_2 = this.product[2].image;
      console.log(this.product)
    })
   }
  ngOnInit(): void {
  }
  userSlectedCard(data:any){
    this.productSerivce.userOnClickData = data; 
  }
}
