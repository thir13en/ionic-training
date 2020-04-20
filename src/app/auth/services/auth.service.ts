import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userLoggedIn = false;

  constructor() { }

  login(): void {
    this.userLoggedIn = true;
  }

  logout(): void {
    this.userLoggedIn = false;
  }

}
