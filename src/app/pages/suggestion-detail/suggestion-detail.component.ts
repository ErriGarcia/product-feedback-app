import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suggestion-detail',
  standalone: true,
  imports: [],
  templateUrl: './suggestion-detail.component.html',
  styleUrl: './suggestion-detail.component.scss'
})
  export class SuggestionDetailComponent implements OnInit {
    id: string;

    constructor (
      private activateRouter: ActivatedRoute
    ) { }

    ngOnInit(): void {
      this.id = this.activateRouter.snapshot.params['id'];
    }
}
