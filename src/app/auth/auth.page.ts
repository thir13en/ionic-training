import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { AuthService } from '@app/auth/services/auth.service';


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
      private loadingCtrl: LoadingController,
  ) { }

  login() {
    this.isLoading = true;
    this.loadingCtrl.create({
      keyboardClose: true,
      message: 'Logging in...'
    }).then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        this.isLoading = false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/beers/tabs/discover');
      }, 1300);
    });
    this.authService.login();
  }

}
