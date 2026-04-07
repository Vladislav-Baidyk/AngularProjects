import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComp } from './form-comp/form-comp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-06');
}
