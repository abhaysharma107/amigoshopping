import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { CheckloginService } from '../_service/checklogin.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private checklogin:CheckloginService,
    private router:Router){}

    canActivate(): boolean {
      if (this.checklogin.logedIn()) {
        this.router.navigate(['/home']);
        return false
      } else {
        return true
      }
    }
}
