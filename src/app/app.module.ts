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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideComponent } from './web/slide/slide.component';
import { SpecialdealComponent } from './web/specialdeal/specialdeal.component';
import { ProductsComponent } from './web/products/products.component';
import { ProductexplainComponent } from './web/productexplain/productexplain.component';
import { CartComponent } from './web/cart/cart.component';
import { LoginComponent } from './web/login/login.component';
import { SignupComponent } from './web/signup/signup.component';
import { UseraccountComponent } from './web/useraccount/useraccount.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
    UseraccountComponent
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
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
