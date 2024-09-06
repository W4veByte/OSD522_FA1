import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Item {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Item[] = [];
  private itemsSubject = new BehaviorSubject<Item[]>(this.items);

  // Expose the items as an observable named items$
  get items$(): Observable<Item[]> {
    return this.itemsSubject.asObservable();
  }

  getTotalQuantity(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  addToCart(item: Item) {
    const existingItem = this.items.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push(item);
    }
    this.itemsSubject.next(this.items); // Notify subscribers
  }

  clearCart() {
    this.items = [];
    this.itemsSubject.next(this.items); // Notify subscribers
  }
}
