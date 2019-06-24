import { ShoppingCartService } from './../shopping-cart.service';
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
  @Input('shopping-cart') shoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  // getQuantity() {
  //   if (!this.shoppingCart) return 0;
  //   if (!this.shoppingCart.items) return 0;
  //   let item = this.shoppingCart.items[this.product.$key];
  //   return item ? item.quantity : 0;
  // }
}