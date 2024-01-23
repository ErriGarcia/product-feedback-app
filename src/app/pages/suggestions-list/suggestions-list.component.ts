import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { Router } from '@angular/router';
import { NoCardComponent } from 'app/shared/components/no-card/no-card.component';
import { Suggestion } from '../suggestion-detail/suggestion.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-suggestions-list',
  standalone: true,
  imports: [CardComponent, NoCardComponent],
  templateUrl: './suggestions-list.component.html',
  styleUrl: './suggestions-list.component.scss'
})
export class SuggestionsListComponent implements OnInit {
  suggestionsList: Suggestion[] = [];

  private router = inject(Router);
  private httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.getData();
    // this.httpClient.patch('api/suggestions', {id: 1, suggestion: {title: 'Prueba'}}).subscribe(() => this.getData());
  }

  getData() {
    this.httpClient.get('api/suggestions').subscribe((res: Suggestion[]) => this.suggestionsList = res);
  }

  viewDetailSuggestion(suggestion: any) {
    this.router.navigate([`suggestion/${suggestion}`])
  }
}
