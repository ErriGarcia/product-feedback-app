import { Component, Input } from '@angular/core';
import { InputComponent } from '../core/shared/components/input/input.component';
import { RouterLink } from '@angular/router';
import { SelectComponent } from '../core/shared/components/select/select.component';
import { TextareaComponent } from '../core/shared/components/textarea/textarea.component';

@Component({
  selector: 'app-add-feedback',
  standalone: true,
  imports: [InputComponent, RouterLink, SelectComponent, TextareaComponent],
  templateUrl: './add-feedback.component.html',
  styleUrl: './add-feedback.component.scss'
})
export class AddFeedbackComponent {
  title: string = 'Create New Feedback';
  labelInput: string = 'Feedback Title'
  descriptionInput: string = 'Add a short, descriptive headline';
  labelCategory: string = 'Category';
  descriptionCategory: string = 'Choose a category for your feedback';
  labelTextarea: string = 'Feedback Detail';
  descriptionTextarea: string = 'Include any specific comments on what should be improved, added, etc.';

  categories: any[] = [
    {id: 1, name: 'All'}, 
    {id: 2, name: 'UI'}, 
    {id: 3, name: 'UX'}, 
    {id: 4, name: 'Enhancement'}, 
    {id: 5, name: 'Bug'}, 
    {id: 6, name: 'Feature'}
  ];

}
