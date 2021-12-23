import { Component, OnInit } from '@angular/core';
import { SlideapiService } from '../../_service/slideapi.service';

@Component({
  selector: 'app-specialdeal',
  templateUrl: './specialdeal.component.html',
  styleUrls: ['./specialdeal.component.css']
})
export class SpecialdealComponent implements OnInit {
  public now: Date = new Date();
  data:any = [];
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
  constructor(private list:SlideapiService) {
    //special deal timing
      //special deal timing till here
      //api subscribe data
    this.list.getData().subscribe(data =>{
      this.data = data;
      this.title_3= this.data[3].category;
      this.title_4 = this.data[6].category;
      this.title_5 = this.data[13].category;
      this.title_6 = this.data[19].category;
      this.price_3 = this.data[3].price;
      this.price_4 = this.data[6].price;
      this.price_5 = this.data[13].price;
      this.price_6 = this.data[19].price;
      this.image_3 = this.data[3].image;
      this.image_4 = this.data[6].image;
      this.image_5 = this.data[13].image;
      this.image_6 = this.data[19].image;
   }
   )
  //subscribe till here
  }

  ngOnInit(): void {
  }

}
