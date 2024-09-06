import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartComponent } from './ui/cart/cart.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { HeroCarouselComponent } from './ui/hero-carousel/hero-carousel.component';
import { FeatureItemsComponent } from './ui/feature-items/feature-items.component';
import { UpgradeItemsComponent } from "./ui/upgrade-items/upgrade-items.component";
import { FooterComponent } from './ui/footer/footer.component';

@Component({
  standalone: true,
  imports: [RouterModule, NavbarComponent, HeroCarouselComponent, FeatureItemsComponent, CartComponent, UpgradeItemsComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'incredible-connection';

  searchQuery = '';

  handleSearch(query: string) {
    this.searchQuery = query;
  }
}
