// feature-items.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

export interface Product {
  name: string;
  price: number;
  image: string;
  category?: string;
}

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-feature-items',
  templateUrl: './feature-items.component.html',
  styleUrls: ['./feature-items.component.css'],
})
export class FeatureItemsComponent implements OnChanges {
  @Input() searchQuery = '';

  products: Product[] = [
    {
      name: 'Lenovo V15 G2 Laptop',
      price: 5500,
      image: 'fp-1.png',
    },
    {
      name: 'Samsung 870 EVO 250GB SSD',
      price: 1190,
      image: 'fp-2.webp',
    },
    {
      name: 'Samsung 75-inch SM Neo QLED 8K TV-QN900B',
      price: 149999,
      image: 'fp-3.png',
    },
    {
      name: 'Apple MacBook Pro 14 M3 8 Core CPU and 10 Core GPU 1TB SSD Silver',
      price: 43999,
      image: 'fp-4.webp',
    },
    {
      name: 'EcoFlow DELTA Pro Portable Power Station',
      price: 55999,
      image: 'fp-5.png',
    },
    {
      name: 'Apple iMac 24 inch M3 with 8 Core CPU and 10 Core GPU 256GB SSD Pink',
      price: 38999,
      image: 'fp-6.png',
    },
  ];

  filteredProducts: Product[] = this.products;

  constructor(private cartService: CartService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchQuery']) {
      this.filterProducts();
    }
  }

  filterProducts() {
    if (this.searchQuery.trim() === '') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  addToCart(product: Product) {
    this.cartService.addToCart({
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }
}
