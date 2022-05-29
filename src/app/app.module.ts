import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideComponent } from './web/product-listing-page/slide/slide.component';
import { SpecialdealComponent } from './web/product-listing-page/specialdeal/specialdeal.component';
import { ProductsComponent } from './web/product-listing-page/products/products.component';
import { ProductexplainComponent } from './web/productexplain/productexplain.component';
import { CartComponent } from './web/user/cart/cart.component';
import { LoginComponent } from './web/auth/login/login.component';
import { SignupComponent } from './web/auth/signup/signup.component';
import { UseraccountComponent } from './web/user/useraccount/useraccount.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OtpverificationComponent } from './web/auth/otpverification/otpverification.component';
import { RecoverAccountComponent } from './web/auth/recover-account/recover-account.component';
import { RecoveryOTPComponent } from './web/auth/recovery-otp/recovery-otp.component';
import { NewPasswordSetupComponent } from './web/auth/new-password-setup/new-password-setup.component';
import { NavigationBarComponent } from './web/common-component/navigation-bar/navigation-bar.component';
import { ElectronicComponent } from './web/product-listing-page/electronic/electronic.component';
import { MensWearComponent } from './web/product-listing-page/mens-wear/mens-wear.component';
import { WomensWearComponent } from './web/product-listing-page/womens-wear/womens-wear.component';
import { JeweleryComponent } from './web/product-listing-page/jewelery/jewelery.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    SpecialdealComponent,
    ProductsComponent,
    ProductexplainComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    UseraccountComponent,
    OtpverificationComponent,
    RecoverAccountComponent,
    RecoveryOTPComponent,
    NewPasswordSetupComponent,
    NavigationBarComponent,
    ElectronicComponent,
    MensWearComponent,
    WomensWearComponent,
    JeweleryComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbNavModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    ToastrModule.forRoot({
      autoDismiss:true,
      maxOpened:1
    }),
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
