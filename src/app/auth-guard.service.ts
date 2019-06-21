import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
    return this.auth.user$.map(user => {
      if (user) return true;

      this.router.navigate(['/login']);
      return false;
    });
  }
}
