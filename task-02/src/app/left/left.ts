import { Component, signal } from '@angular/core';
import { NavI } from '../Interfaces/navigation/NavI';
import NavLeft from './../dataJson/leftDataJson/NavLeft.json'
import { CurrentUser } from '../current-user/current-user';
@Component({
  selector: 'app-left',
  standalone:true,
  imports: [CurrentUser],
  templateUrl: './left.html',
  styleUrl: './left.css',
})
export class Left {
  navigation = signal<NavI[]>(NavLeft.naviagtion)
  selectedIndex = signal<number>(0)
  onSelectedIndex(id:number){
    this.selectedIndex.set(id);
  }
}
