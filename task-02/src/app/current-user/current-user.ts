import { Component, inject } from '@angular/core';
import { CurrentUserService } from '../Services/currentUserService/current-user-service';

@Component({
  selector: 'app-current-user',
  imports: [],
  templateUrl: './current-user.html',
  styleUrl: './current-user.css',
})
export class CurrentUser {
  currentUserService = inject(CurrentUserService)
}
