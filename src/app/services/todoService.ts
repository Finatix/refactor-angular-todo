import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todo = [];
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(null);
  }

  add(x): void {
    this.todo.push(x);
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }

  rm(x: number): void {
    this.todo.splice(x, 1);
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }

  fetchTodos(): void {
    const storedTodos = localStorage.getItem('todo');
    if (storedTodos) {
      this.todo = JSON.parse(storedTodos);
    } else {
      this.httpClient.get('https://jsonplaceholder.typicode.com/todos')
        .subscribe((todos: any) => {
          this.todo = todos;
          localStorage.setItem('todo', JSON.stringify(this.todo));
        });
    }
  }
}
