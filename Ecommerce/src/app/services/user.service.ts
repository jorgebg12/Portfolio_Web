import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { UserStoreService } from './user-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private userStore : UserStoreService) {}

  login(username: string, password: string): Observable<any>{
    return this.http.post('http://localhost:3000/api/user/login', {
      username: username,
      password: password
    }).pipe(map((resp: any) => {
      this.userStore.token = resp.token;
      localStorage.setItem('user-token', resp.token);
      return resp;
    }));
  }

  register(username: string): Observable<any>{
    return this.http.post('http://localhost:3000/api/user/register', {
      username : username,
      password : 'SECRET'
    });
  }
}
