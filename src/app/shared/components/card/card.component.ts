import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoCardComponent } from '../no-card/no-card.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NoCardComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() suggestion: any;
  @Output() suggestionSelected: EventEmitter<number> = new EventEmitter<number>();

  selectSuggestion() {
    this.suggestionSelected.emit(this.suggestion.id);
  }
}
