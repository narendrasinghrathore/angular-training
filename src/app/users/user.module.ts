import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './container/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserTodoComponent } from './components/user-todo/user-todo.component';
import { UserTodoListComponent } from './container/user-todo-list/user-todo-list.component';
import { MatModule } from '../theme/mat/mat.module';
import { UserComponent } from './container/user/user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserListComponent, UserDetailComponent, UserTodoComponent, UserTodoListComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatModule
  ]
})
export class UserModule { }
