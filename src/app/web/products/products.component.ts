import { Component, OnInit } from '@angular/core';
import { SlideapiService } from '../slide/slideapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data:any=[];
  
  constructor(private list: SlideapiService) {
    this.list.getData().subscribe(data =>{
      this.data = data;
    
    })
  }

  ngOnInit(): void {
  }
  userSlectedCard(datas:any){
    this.list.userOnClickData = datas
  }
}
