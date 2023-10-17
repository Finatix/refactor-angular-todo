import {Component, OnInit} from '@angular/core';
import { TodoService } from '../services/todoService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  srv: TodoService = new TodoService()
  newTodo: object

  ngOnInit() {
    this.srv.fetchTodos();
  }

  add(x: HTMLInputElement): void {
    this.newTodo = { title: x.value, completed: false };
    this.srv.add(this.newTodo);
    x.value = '';
  }

  remove(i: number): void {
    this.srv.rm(i);
  }

  get todo() {
    return this.srv.todo;
  }
}
