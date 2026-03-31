import { Component } from '@angular/core';
import { LeftPartProduct } from '../left-part-product/left-part-product';
import { RightPartProduct } from '../right-part-product/right-part-product';

@Component({
  selector: 'app-product',
  imports: [LeftPartProduct,RightPartProduct],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {}
