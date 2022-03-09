import { Component, OnInit } from '@angular/core';
import { UseraccountService } from 'src/app/_service/useraccount.service';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css']
})
export class UseraccountComponent implements OnInit {

  constructor(private userProfile:UseraccountService) { }

  ngOnInit(): void {
    this.userProfile.userData().subscribe(data => console.log(data)
    )
  }

}
