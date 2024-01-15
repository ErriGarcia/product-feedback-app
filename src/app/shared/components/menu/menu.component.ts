import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  categories: any[] = [
    {id: 1, categoryName: 'All'}, 
    {id: 2, categoryName: 'UI'}, 
    {id: 3, categoryName: 'UX'}, 
    {id: 4, categoryName: 'Enhancement'}, 
    {id: 5, categoryName: 'Bug'}, 
    {id: 6, categoryName: 'Feature'}
  ];

  roadmapStatus: any[] = [
    {id: 7, nameStatus: 'Planned', color: 'pink'},
    {id: 8, nameStatus: 'In-Progress', color: 'violet'},
    {id: 9, nameStatus: 'Live', color: 'light-blue'},
  ];
}
