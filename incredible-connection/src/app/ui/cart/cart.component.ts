import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, Item } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items$: Observable<Item[]>;
  total$: Observable<number>;

  constructor(private cartService: CartService) {
    this.items$ = this.cartService.items$;
    this.total$ = this.items$.pipe(
      map((items: Item[]) => items.reduce((total, item) => total + (item.price * item.quantity), 0))
    );
  }

  ngOnInit() {
    console.log('CartComponent initialized');
  }

  checkout() {
    alert('You have checked out!');
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
