import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../_service/products.service';

@Component({
  selector: 'app-specialdeal',
  templateUrl: './specialdeal.component.html',
  styleUrls: ['./specialdeal.component.css']
})
export class SpecialdealComponent implements OnInit {
  public now: Date = new Date();
  product:any = [];
  title_3:any = [];
  title_4:any = [];
  title_5:any = [];
  title_6:any = [];
  price_3:any = [];
  price_4:any = [];
  price_5:any = [];
  price_6:any = [];
  image_3:any =[];
  image_4:any = [];
  image_5:any = [];
  image_6:any = [];
  constructor(private productService:ProductsService) {
    this.productService.getProducts().subscribe(data =>{
      this.product = data;
      this.title_3= this.product[3].category;
      this.title_4 = this.product[6].category;
      this.title_5 = this.product[13].category;
      this.title_6 = this.product[19].category;
      this.price_3 = this.product[3].price;
      this.price_4 = this.product[6].price;
      this.price_5 = this.product[13].price;
      this.price_6 = this.product[19].price;
      this.image_3 = this.product[3].image;
      this.image_4 = this.product[6].image;
      this.image_5 = this.product[13].image;
      this.image_6 = this.product[19].image;
   }
   )
  }

  ngOnInit(): void {
  }

}
