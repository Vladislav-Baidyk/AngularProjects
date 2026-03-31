import { Component, signal } from '@angular/core';
import { MobileHeader } from '../mobile-header/mobile-header';
import { Basket } from '../basket/basket';

@Component({
  selector: 'app-header',
  imports: [MobileHeader,Basket],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  open = signal(false);
  openBusket() {
    this.open.update(v => !v);
    console.log("click");
  }
}
