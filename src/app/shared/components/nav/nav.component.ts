import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  menuItems: any[] = [
    { id: 12, name: 'Most Upvotes' },
    { id: 13, name: 'Least Upvotes' },
    { id: 14, name: 'Most Comments' },
    { id: 15, name: 'Least Upvotes' },
  ];

  openModal() {
    // open modal to create feedback
  }
}
