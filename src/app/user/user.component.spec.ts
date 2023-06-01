import { TestBed, async } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserService } from '../services/userService';

describe('UserComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent
      ],
      providers: [ UserService ]
    }).compileComponents();
  }));

  it('should add a user', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const comp = fixture.debugElement.componentInstance;
    const service = TestBed.inject(UserService);
    const initialLength = service.user.length;
    comp.add({ name: 'New User' });
    expect(service.user.length).toBeGreaterThan(initialLength);
  });

  it('should remove a user', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const comp = fixture.debugElement.componentInstance;
    const service = TestBed.inject(UserService);
    const initialLength = service.user.length;
    comp.rm(0);
    expect(service.user.length).toBeLessThan(initialLength);
  });
});
