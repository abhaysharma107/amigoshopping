import { Component, OnInit } from '@angular/core';
import { SlideapiService } from '../../_service/slideapi.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  data:any = [];
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

  constructor(private list:SlideapiService) {
    this.list.getData().subscribe(data =>{
      this.data = data;
      this.data_1 = this.data[0]
      this.data_2 = this.data[1]
      this.data_3 = this.data[2]
      this.title_0= this.data[0].title;
      this.title_1 = this.data[1].title;
      this.title_2 = this.data[2].title;
      this.des_0 = this.data[0].description;
      this.des_1 = this.data[1].description;
      this.des_2 = this.data[2].description;
      this.image_0 = this.data[0].image;
      this.image_1 = this.data[1].image;
      this.image_2 = this.data[2].image;
      console.log(this.data)
    })
   }
  ngOnInit(): void {
  }
  userSlectedCard(datas:any){
    this.list.userOnClickData = datas; 
  }
}
