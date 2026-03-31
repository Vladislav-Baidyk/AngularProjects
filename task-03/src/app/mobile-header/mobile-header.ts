import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-mobile-header',
  imports: [],
  templateUrl: './mobile-header.html',
  styleUrl: './mobile-header.css',
})
export class MobileHeader {

  show = signal(false);

  toggleLinks() {
    this.show.update(v => !v);
  }

}
