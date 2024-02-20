import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService{

  private authToken: string = null;
  constructor() { 
    const savedToken = localStorage.getItem('user-token');
    if(savedToken)
      this.authToken = savedToken;
    }


  set token(token: string) {
    this.authToken = token;
  }

  get token() {
    return this.authToken;
  }

  isLoggedIn() {
    return this.authToken != null;
  }
}
