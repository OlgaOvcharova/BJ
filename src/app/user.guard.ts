import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable()
export class UserGuard implements CanActivate {

  constructor(
    private _userServive: UserService,
    private _router: Router,
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {    
    if (this._userServive.getUser()){
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
