import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchQuery = '';
  totalItems$: Observable<number> = of(0);

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.totalItems$ = this.cartService.items$.pipe(
      map(items => items.reduce((total, item) => total + item.quantity, 0))
    );
  }

  onSearchChange() {
    this.search.emit(this.searchQuery);
  }

  toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden');
    }
  }

  closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.add('hidden');
    }
  }
}
