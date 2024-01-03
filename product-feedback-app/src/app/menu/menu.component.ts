import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  buttonsMenu: any[] = [
    {id: 1, nameButton: 'All'}, 
    {id: 2, nameButton: 'UI'}, 
    {id: 3, nameButton: 'UX'}, 
    {id: 4, nameButton: 'Enhancement'}, 
    {id: 5, nameButton: 'Bug'}, 
    {id: 6, nameButton: 'Feature'}
  ];

  roadmapStatus: any[] = [
    {id: 7, nameStatus: 'Planned', color: 'pink'},
    {id: 8, nameStatus: 'In-Progress', color: 'violet'},
    {id: 9, nameStatus: 'Live', color: 'light-blue'},
  ];
}
