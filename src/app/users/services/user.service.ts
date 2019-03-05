import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { UserObject, UserTodo } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  userApiUrl = 'https://jsonplaceholder.typicode.com/users';

  userTodoApiUrl = 'https://jsonplaceholder.typicode.com/todos?userId=';

  userList$: BehaviorSubject<UserObject[]> = new BehaviorSubject([]);

  userTodo$: Subject<UserTodo> = new Subject();

  userList: UserObject[] = [];


  constructor() { }

  getUsersList(): Observable<boolean> {
    return new Observable(ob => {
      fetch(this.userApiUrl)
        .then(response => response.json())
        .then(json => {
          this.userList = json;
          this.userList$.next(json);
          ob.next(json);
        })
        .catch(err => {
          console.log(err);
          ob.complete();
        });
      return {
        unsubscribe() {

        }
      };
    });
  }

  getUserDetail(id: number): Observable<UserObject> {
    const obs_ = Observable.create(obs => {
      if (this.userList.length === 0) {
        this.getUsersList().subscribe(data => {
          obs.next(this.findUser(id));
        });
      }
      obs.next(this.findUser(id));
    });
    return obs_;
  }

  private findUser(id: number): UserObject {
    return this.userList.find(data => data.id === id);
  }

  getUserTodos(userId: number) {
    fetch(`${this.userTodoApiUrl}${+userId}`)
      .then(response => response.json())
      .then(json => {
        this.userTodo$.next(json);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
