import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckloginService } from '../_service/checklogin.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanDeactivate<unknown> {
  constructor(private checklogin:CheckloginService,
    private router:Router){}
  isLoggedIn = false
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.checklogin.currentMessage.subscribe(message => {this.isLoggedIn = message; console.log(message);
      })
      if (this.isLoggedIn == true) {
        return this.router.createUrlTree(['/home'])  
      }
      else
      return true
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
