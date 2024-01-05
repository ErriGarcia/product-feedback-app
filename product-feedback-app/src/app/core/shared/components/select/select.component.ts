import { Component, Input } from '@angular/core';

interface itemsType {
  id: string;
  name: string;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent { 
  @Input() label: string = '';
  @Input() description: string = '';
  @Input() options: itemsType[] = [];
  @Input() element: string = '';

  categories: any[] = [
    {id: 1, categoryName: 'All'}, 
    {id: 2, categoryName: 'UI'}, 
    {id: 3, categoryName: 'UX'}, 
    {id: 4, categoryName: 'Enhancement'}, 
    {id: 5, categoryName: 'Bug'}, 
    {id: 6, categoryName: 'Feature'}
  ];
}
