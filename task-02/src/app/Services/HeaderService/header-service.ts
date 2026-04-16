import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  searchTerm = signal('');
  updateSearch(value:string){
    this.searchTerm.set(value)
  }
}
