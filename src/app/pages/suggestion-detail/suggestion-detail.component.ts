import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Suggestion } from './suggestion.interface';
import { CardComponent } from 'app/shared/components/card/card.component';
import { CommentCardComponent } from 'app/shared/comment-card/comment-card.component';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-suggestion-detail',
  standalone: true,
  imports: [CardComponent, CommentCardComponent, RouterLink],
  templateUrl: './suggestion-detail.component.html',
  styleUrl: './suggestion-detail.component.scss'
})
  export class SuggestionDetailComponent implements OnInit {
    id: string;

    suggestion: Suggestion;

    private activateRouter = inject(ActivatedRoute);
    private httpClient = inject(HttpClient);

    ngOnInit(): void {
      this.id = this.activateRouter.snapshot.params['id'];

      const httpParams = new HttpParams().append('id', this.id);

      this.httpClient.get('api/suggestions/suggestion', {
        params: httpParams
      }).subscribe((data) => this.suggestion = data[0]);
    }
}
