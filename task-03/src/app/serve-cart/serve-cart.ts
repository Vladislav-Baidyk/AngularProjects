import { signal, Injectable, computed } from '@angular/core';

interface ProductI {
  img : string,
  quantity:number,
  price:number
}

@Injectable({providedIn:'root'})
export class ServeCart {
  private cartItems = signal<ProductI[]>([]);
  count = computed(() => this.cartItems().length);
  items = computed(() => this.cartItems());
  addToCart(product: ProductI) {
    if(product.quantity > 0){
    this.cartItems.set([product]);
    console.log("Cart updated:", product);
    }
  }

  clearCart() {
    this.cartItems.set([]);
  }
}
