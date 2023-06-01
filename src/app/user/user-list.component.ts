import {Component, OnInit} from '@angular/core';
import { UserService } from '../services/userService';
import { User } from '../services/userService';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  srv: UserService = new UserService()
  newUser: User

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

  get users() {
    return this.srv.user;
  }
}
