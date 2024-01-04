import { Component } from '@angular/core';
import { InputComponent } from '../core/shared/components/input/input.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-feedback',
  standalone: true,
  imports: [InputComponent, RouterLink],
  templateUrl: './add-feedback.component.html',
  styleUrl: './add-feedback.component.scss'
})
export class AddFeedbackComponent {
  title: string = 'Title';
}
