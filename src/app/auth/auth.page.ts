import { Component } from '@angular/core';

import { AuthService } from '@app/auth/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {
  isLoading: boolean;

  constructor(
      private router: Router,
      private authService: AuthService,
  ) { }

  login() {
    this.isLoading = true;
    this.authService.login();
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigateByUrl('/beers/tabs/discover');
    }, 1300);
  }

}
