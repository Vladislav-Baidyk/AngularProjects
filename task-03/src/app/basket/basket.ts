import { Component,inject } from '@angular/core';
import { ServeCart } from '../serve-cart/serve-cart';

@Component({
  selector: 'app-basket',
  imports: [],
  templateUrl: './basket.html',
  styleUrl: './basket.css',
})
export class Basket {
  public cart = inject(ServeCart);
}
