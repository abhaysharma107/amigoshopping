import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './web/user/cart/cart.component';
import { LoginComponent } from './web/auth/login/login.component';
import { NewPasswordSetupComponent } from './web/auth/new-password-setup/new-password-setup.component';
import { OtpverificationComponent } from './web/auth/otpverification/otpverification.component';
import { ProductexplainComponent } from './web/productexplain/productexplain.component';
import { RecoverAccountComponent } from './web/auth/recover-account/recover-account.component';
import { RecoveryOTPComponent } from './web/auth/recovery-otp/recovery-otp.component';
import { SignupComponent } from './web/auth/signup/signup.component';
import { SlideComponent } from './web/product-listing-page/slide/slide.component';
import { UseraccountComponent } from './web/user/useraccount/useraccount.component';
import { LoginGuard } from './_guard/login.guard';
import { ElectronicComponent } from './web/product-listing-page/electronic/electronic.component';
import { MensWearComponent } from './web/product-listing-page/mens-wear/mens-wear.component';
import { WomensWearComponent } from './web/product-listing-page/womens-wear/womens-wear.component';
import { JeweleryComponent } from './web/product-listing-page/jewelery/jewelery.component';

const routes: Routes = [
  { path: '', component: SlideComponent },
  { path: 'home', component: SlideComponent },
  { path: 'productexplain', component: ProductexplainComponent },
  { path: 'electronic', component: ElectronicComponent },
  { path: 'menswear', component: MensWearComponent },
  { path: 'womenswear', component: WomensWearComponent },
  { path: 'jewelwey', component: JeweleryComponent },
  { path: 'home/productexplain', component: ProductexplainComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', canActivate: [LoginGuard], component: LoginComponent },
  { path: 'signup', canActivate: [LoginGuard], component: SignupComponent },
  { path: 'account', component: UseraccountComponent },
  { path: 'otpverification', component: OtpverificationComponent },
  { path: 'recoveraccount', component: RecoverAccountComponent },
  { path: 'recoveryOTP', component: RecoveryOTPComponent },
  { path: 'newpassword', component: NewPasswordSetupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
