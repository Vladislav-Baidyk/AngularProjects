import { inject, Injectable, signal } from '@angular/core';
import { UserI } from '../../Interfaces/user/user-i';
import { UsersService } from '../UserService/users-service';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {

  currentUser = signal<UserI | null>(null)
  onChangeCurrentUser(user:UserI){
    this.currentUser.set(user);
  }
}
