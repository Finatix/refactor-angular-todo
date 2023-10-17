import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoService } from '../services/todoService';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [ TodoService ]
    }).compileComponents();
  }));

  it('should add a todo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const service = TestBed.inject(TodoService);
    const initialLength = service.todo.length;
    app.add({ title: 'New Todo', completed: false });
    expect(service.todo.length).toBeGreaterThan(initialLength);
  });

  it('should remove a todo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const service = TestBed.inject(TodoService);
    const initialLength = service.todo.length;
    app.rm(0);
    expect(service.todo.length).toBeLessThan(initialLength);
  });
});
