import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface User {
  id?: number
  name: string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user = [];
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(null);
  }

  add(x): void {
    this.user.push(x);
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  rm(x): void {
    this.user.splice(x, 1);
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  fetchUsers(): void {
    const storedUsers = localStorage.getItem('user');
    if (storedUsers) {
      this.user = JSON.parse(storedUsers);
    } else {
      this.httpClient.get('https://jsonplaceholder.typicode.com/users')
        .subscribe((users: any) => {
          this.user = users;
          localStorage.setItem('user', JSON.stringify(this.user));
        });
    }
}
}
