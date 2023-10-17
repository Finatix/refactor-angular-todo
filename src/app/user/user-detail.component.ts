import {Component, Input} from '@angular/core';
import {User, UserService} from '../services/userService';


@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent {
  @Input() user: User;

  constructor(private userService: UserService) { }

  remove(): void {
    this.userService.rm(this.user);
  }
}
