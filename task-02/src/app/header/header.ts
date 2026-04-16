import { Component, inject, signal } from '@angular/core';
import { HeaderService } from '../Services/HeaderService/header-service';
import { HeaderMobile } from '../header-mobile/header-mobile';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [HeaderMobile,HeaderMobile],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  headerService = inject(HeaderService);
  onInputService(event:Event){
    const val = (event.target as HTMLInputElement).value;
    this.headerService.updateSearch(val);
  }

  menu = signal(false)
  menuToggle(){
    this.menu.update(state => !state)
  }
}
