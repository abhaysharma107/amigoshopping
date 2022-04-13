import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UseraccountService } from 'src/app/_service/useraccount.service';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css'],
})
export class UseraccountComponent implements OnInit {
  constructor(
    private userProfile: UseraccountService,
    private fb: FormBuilder
  ) {}
  userName: string = '';
  userEmail: string = '';
  edit: boolean = false;
  editUserInfo: any;
  ngOnInit(): void {
    this.userProfile.userData().subscribe((data) => {
      this.userName = data.user.firstname;
      this.userEmail = data.user.emailform;
    });
    this.editUserInfo = this.fb.group({
      updatedName: ['', [Validators.required]],
      updatedEmail: ['', [Validators.required]],
    });
  }

  get updatedName() {return this.editUserInfo.get('updatedName');}
  get updatedEmail() {return this.editUserInfo.get('updatedEmail');}

  editingProfile() {
    this.edit = true;
  }

  onSubmit(){
    console.log(this.editUserInfo.value);
    this.userProfile.editUserData(this.editUserInfo.value).subscribe(data => {
      console.log(data);
      
    })
    this.edit = false
  }
}
