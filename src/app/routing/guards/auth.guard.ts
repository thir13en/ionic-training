import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '@app/auth/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
      private router: Router,
      private authService: AuthService
  ) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/auth']);
    }
    return this.authService.isUserLoggedIn;
  }
}
