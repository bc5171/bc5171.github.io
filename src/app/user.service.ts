import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService) { }

  getUsers(): Observable<User[]> {
    const users = of(USERS);
    this.messageService.add('UserService: fetched players');
    return users;
  }

  getUser(id: number): Observable<User> {
    const users = USERS.find(u => u.id === id)!;
    this.messageService.add(`PlayerService: fetched player id=${id}`);
    return of(users);
  }

}
