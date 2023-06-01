import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './todo/app.component';
import { TodoService } from './services/todoService';
import { UserService } from './services/userService';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user/user-list.component';
import { UserDetailComponent } from './user/user-detail.component';
import {UserComponent} from "./user/user.component";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: AppComponent },
  { path: 'users', component: UserListComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodoService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
