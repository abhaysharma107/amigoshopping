import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {Router, RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideComponent } from './web/slide/slide.component';
import { SpecialdealComponent } from './web/specialdeal/specialdeal.component';
import { ProductsComponent } from './web/products/products.component';
import { ProductexplainComponent } from './web/productexplain/productexplain.component';
import { CartComponent } from './web/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    SpecialdealComponent,
    ProductsComponent,
    ProductexplainComponent,
    CartComponent,
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'', component:SlideComponent},
      {path:'home', component:SlideComponent},
      {path:'productexplain', component:ProductexplainComponent},
      {path:'home/productexplain', component:ProductexplainComponent},
      {path:'cart', component:CartComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
