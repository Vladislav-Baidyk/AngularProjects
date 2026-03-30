import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Links } from './links/links';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Links],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-02');
}
