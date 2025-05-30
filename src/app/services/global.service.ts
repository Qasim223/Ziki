import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  isLoggedIn: boolean = false;
  darkMode: boolean = false;

  constructor() {}

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    const element: any = document.querySelector('html');
    element.classList.toggle('my-app-dark');
  }

  getDarkModeStatus(): boolean {
    return this.darkMode;
  }

  setLoginStatus(status: boolean) {
    this.isLoggedIn = status;
  }

  getLoginStatus(): boolean {
    return this.isLoggedIn;
  }
}
