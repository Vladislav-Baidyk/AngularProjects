import { Component,inject, signal,computed } from '@angular/core';
import { ServeCart } from '../serve-cart/serve-cart';
@Component({
  selector: 'app-right-part-product',
  imports: [],
  templateUrl: './right-part-product.html',
  styleUrl: './right-part-product.css',
})
export class RightPartProduct {
  private cartService = inject(ServeCart);
  quantity = signal<number>(0);
  increment(){
    this.quantity.update(p => p+1);
  }
  decrement(){
    this.quantity.update(p =>p <= 0 ? 0 : p-1 );
  }
  priceProduct = 125;
  totalPrice = computed(() => this.quantity() * this.priceProduct);

  add(){
    this.cartService.addToCart({img:"/images/image-product-1.jps",quantity:this.quantity(),price:this.totalPrice()})
    console.log("added");
  }
}
