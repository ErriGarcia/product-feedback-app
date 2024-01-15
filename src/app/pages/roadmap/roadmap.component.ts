import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from '../../shared/components/nav/nav.component';

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavComponent],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss'
})
export class RoadmapComponent {
  
}
