import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChangedPasswordService } from 'src/app/_service/changed-password.service';
import { CheckloginService } from 'src/app/_service/checklogin.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent?.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-new-password-setup',
  templateUrl: './new-password-setup.component.html',
  styleUrls: ['./new-password-setup.component.css']
})
export class NewPasswordSetupComponent implements OnInit {

  changePasswordForm: any
  hide = true;
  isLoggedIn = false;
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder,
    private route: Router,
    private toastr: ToastrService,
    private checkLogin: CheckloginService,
    private changedPassword: ChangedPasswordService) { }

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({
      password: ['', [
        Validators.required, Validators.minLength(6)
      ]],
      confirmPassword: [''],
    })
}
get password() {return this.changePasswordForm.get('password');}
  onSubmit() {
    console.log(this.changePasswordForm.value);
    this.toastr.info('Please Wait, Processing')
    this.changedPassword.sendChangedPassword(this.changePasswordForm.value).subscribe(data => {
      console.log(data);
      
    })
  }
}
