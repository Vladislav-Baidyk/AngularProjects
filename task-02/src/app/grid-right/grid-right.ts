import { Component, computed, inject, signal,effect} from '@angular/core';
import { UsersService } from '../Services/UserService/users-service';
import { UserI } from '../Interfaces/user/user-i';
import { CurrentUserService } from '../Services/currentUserService/current-user-service';
import { HeaderService } from '../Services/HeaderService/header-service';
import { Header } from '../header/header';

@Component({
  selector: 'app-grid-right',
  imports: [Header],
  templateUrl: './grid-right.html',
  styleUrl: './grid-right.css',
})
export class GridRight {
  userService = inject(UsersService)
  userCurrentService = inject(CurrentUserService)
  headerService = inject(HeaderService)
  allUsers = signal<UserI[]>([])

  start = signal(0)
  end = signal(5)

  constructor() {
    effect(() => {
      this.loadUsers();
    });
  }
nextClick() {
    if (this.end() < 10) {
      this.start.update(s => s + 5);
      this.end.update(e => e + 5);
    }
  }
  backClick(){
    if(this.start()>0){
      this.end.set(this.end() - 5)
      this.start.set(this.start() - 5)
    }
  }
  private loadUsers() {
    this.userService.getUsers(this.start(), this.end()).subscribe(data => {
      this.allUsers.set(data);
    });
  }


  filteredUsers = computed(() => {
    const term = this.headerService.searchTerm().toLowerCase();
    return this.allUsers().filter(u => u.name.toLowerCase().includes(term));
  })
  onClickUser(user:UserI){
    this.userCurrentService.onChangeCurrentUser(user);
  }
}
