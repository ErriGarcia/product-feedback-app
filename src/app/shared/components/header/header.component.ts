import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent, RouterLink, NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
