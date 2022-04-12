import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './web/cart/cart.component';
import { LoginComponent } from './web/login/login.component';
import { NewPasswordSetupComponent } from './web/new-password-setup/new-password-setup.component';
import { OtpverificationComponent } from './web/otpverification/otpverification.component';
import { ProductexplainComponent } from './web/productexplain/productexplain.component';
import { RecoverAccountComponent } from './web/recover-account/recover-account.component';
import { RecoveryOTPComponent } from './web/recovery-otp/recovery-otp.component';
import { SignupComponent } from './web/signup/signup.component';
import { SlideComponent } from './web/slide/slide.component';
import { UseraccountComponent } from './web/useraccount/useraccount.component';
import { LoginGuard } from './_guard/login.guard';

const routes: Routes = [
  {path:'', component:SlideComponent},
  {path:'home', component:SlideComponent},
  {path:'productexplain', component:ProductexplainComponent},
  {path:'home/productexplain', component:ProductexplainComponent},
  {path:'cart', component:CartComponent},
  {path:'login', canActivate:[LoginGuard], component:LoginComponent},
  {path:'signup', canActivate:[LoginGuard],component:SignupComponent},
  {path:'account', component:UseraccountComponent },
  {path:'otpverification', component:OtpverificationComponent},
  {path:'recoveraccount', component:RecoverAccountComponent},
  {path:'recoveryOTP',component:RecoveryOTPComponent},
  {path:'newpassword', component: NewPasswordSetupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
