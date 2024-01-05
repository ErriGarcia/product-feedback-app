import { Component, Input } from '@angular/core';
import { InputComponent } from '../core/shared/components/input/input.component';
import { RouterLink } from '@angular/router';
import { SelectComponent } from '../core/shared/components/select/select.component';

@Component({
  selector: 'app-add-feedback',
  standalone: true,
  imports: [InputComponent, RouterLink, SelectComponent],
  templateUrl: './add-feedback.component.html',
  styleUrl: './add-feedback.component.scss'
})
export class AddFeedbackComponent {
  @Input() title: string = '';

  categories: any[] = [
    {id: 1, name: 'All'}, 
    {id: 2, name: 'UI'}, 
    {id: 3, name: 'UX'}, 
    {id: 4, name: 'Enhancement'}, 
    {id: 5, name: 'Bug'}, 
    {id: 6, name: 'Feature'}
  ];
}
