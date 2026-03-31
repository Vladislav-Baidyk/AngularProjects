import { Component, signal } from '@angular/core';
import shoesBig from "../json/picShoes.json";
import shoesSmall from "../json/picSmallShoes.json";
@Component({
  selector: 'app-left-part-product',
  imports: [],
  templateUrl: './left-part-product.html',
  styleUrl: './left-part-product.css',
})
export class LeftPartProduct {
  public shoesBig = shoesBig.shoesBig;
  public shoesSmallArr = shoesSmall.shoesSmall;
  currentShoe = signal<number>(0);
  currentShoeSmall = signal<number>(0);
  changeShoeBig(id:number){
    this.currentShoe.set(id);
  }
  changeShoeSmall(id:number){
    this.currentShoeSmall.set(id);
  }
}
