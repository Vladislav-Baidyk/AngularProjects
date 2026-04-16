import { Component, signal } from '@angular/core';
import { NavI } from '../Interfaces/navigation/NavI';
import NavLeft from './../dataJson/leftDataJson/NavLeft.json'
import { CurrentUser } from '../current-user/current-user';
import { output } from '@angular/core';
@Component({
  selector: 'app-header-mobile',
  imports: [CurrentUser],
  templateUrl: './header-mobile.html',
  styleUrl: './header-mobile.css',
})
export class HeaderMobile {
    navigation = signal<NavI[]>(NavLeft.naviagtion)
  selectedIndex = signal<number>(0)
  onSelectedIndex(id:number){
    this.selectedIndex.set(id);
  }
close = output<void>();
closeMenu() {
    this.close.emit(); 
  }
}
