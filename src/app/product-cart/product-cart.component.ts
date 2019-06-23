import { Component, Input } from '@angular/core';
import { Product } from './../models/product';

@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  constructor() { }

}
