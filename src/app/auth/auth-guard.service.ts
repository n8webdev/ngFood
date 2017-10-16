import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(
    private _auth: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._auth.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }

  canLoad() {
    if (this._auth.isAuthenticated()) {
      return true;
    } else {
      alert('Please, log in!');
      return false;
    }
  }

}
