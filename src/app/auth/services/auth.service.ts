import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userLoggedIn = false;
  readonly userId = 'abc';

  get isUserLoggedIn(): boolean {
    return this.userLoggedIn;
  }

  login(): void {
    this.userLoggedIn = true;
  }

  logout(): void {
    this.userLoggedIn = false;
  }

}
