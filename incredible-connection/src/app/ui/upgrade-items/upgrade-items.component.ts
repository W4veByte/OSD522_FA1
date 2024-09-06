import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, Item } from '../../services/cart.service';
import { Product } from '../feature-items/feature-items.component';

@Component({
  selector: 'app-upgrade-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upgrade-items.component.html',
  styleUrls: ['./upgrade-items.component.css'],
})
export class UpgradeItemsComponent implements OnChanges {
  @Input() searchQuery = '';

  products: Product[] = [
    {
      name: '12th Gen Intel Core i9-12900KS',
      price: 9900,
      image: 'cpu-1.jpg',
      category: 'CPUs',
    },
    {
      name: 'ASUS ROG Strix Z790-F Gaming WiFi II LGA 1700(Intel 14th &13th & 12th Gen) ATX',
      price: 11599,
      image: 'mb-1.jpg',
      category: 'Motherboards',
    },
    {
      name: 'Corsair Vengeance RAM 32GB',
      price: 2900,
      image: 'ram-1.avif',
      category: 'RAM',
    },
    {
      name: 'H7 Elite RTX 4070 Ti SUPER Gaming PC',
      price: 59999,
      image: 'pc-1.avif',
      category: 'Pre-built PCs',
    },
    {
      name: 'GIGABYTE X670E AORUS XTREME Motherboard',
      price: 16999,
      image: 'mb-2.jpg',
      category: 'Motherboards',
    },
    {
      name: 'H5 Flow Gaming PC with RTX 3050',
      price: 12999,
      image: 'pc-2.jpg',
      category: 'Pre-built PCs',
    },
    {
      name: 'H5 Flow Gaming PC with RTX 3050 or RTX 4060 GPU',
      price: 1499,
      image: 'ram-2.png',
      category: 'RAM',
    },
    {
      name: 'AMD Ryzen 5 7600X 4.7GHz Up to 5.3GHz Socket AM5 Processor',
      price: 7999,
      image: 'cpu-2.webp',
      category: 'CPUs',
    },
  ];

  filteredProducts: Product[] = this.products;

  constructor(private cartService: CartService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchQuery']) {
      this.filterProducts();
    }
  }

  filterByCategory(category: string) {
    this.filteredProducts = this.products.filter(product => product.category === category);
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
    const item: Item = { ...product, quantity: 1 };
    this.cartService.addToCart(item);
  }
}
