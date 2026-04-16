import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridRight } from './grid-right/grid-right';
import { UsersService } from './Services/UserService/users-service';
import { inject } from '@angular/core';
import { Left } from './left/left';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,GridRight,Left],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
