import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Component } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatOptionModule, MatSlideToggleModule, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  menuItems: any[] = [
    { id: 12, name: 'Most Upvotes' },
    { id: 13, name: 'Least Upvotes' },
    { id: 14, name: 'Most Comments' },
    { id: 15, name: 'Least Upvotes' },
  ];
}
