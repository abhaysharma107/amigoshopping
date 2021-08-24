import { Component, OnInit } from '@angular/core';
import { SlideapiService } from '../slide/slideapi.service';

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
  constructor(private list:SlideapiService) { 
    this.data = this.list.userOnClickData;
    this.img = this.data.image;
    this.title = this.data.title;
    this.des = this.data.description;
  }

  ngOnInit(): void {
  }
}
