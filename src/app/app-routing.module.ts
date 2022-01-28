import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './web/cart/cart.component';
import { LoginComponent } from './web/login/login.component';
import { ProductexplainComponent } from './web/productexplain/productexplain.component';
import { SignupComponent } from './web/signup/signup.component';
import { SlideComponent } from './web/slide/slide.component';

const routes: Routes = [
  {path:'', component:SlideComponent},
  {path:'home', component:SlideComponent},
  {path:'productexplain', component:ProductexplainComponent},
  {path:'home/productexplain', component:ProductexplainComponent},
  {path:'cart', component:CartComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
