import {Component, OnInit} from '@angular/core';
import { UserService } from '../services/userService';

@Component({
  selector: 'user-root',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  srv: UserService = new UserService()
  newUser: object

  ngOnInit() {
    this.srv.fetchUsers();
  }

  add(x: HTMLInputElement): void {
    this.newUser = { name: x.value };
    this.srv.add(this.newUser);
    x.value = '';
  }

  remove(i: number): void {
    this.srv.rm(i);
  }

  get user() {
    return this.srv.user;
  }
}
