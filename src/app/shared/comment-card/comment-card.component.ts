import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  standalone: true,
  imports: [],
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.scss'
})
export class CommentCardComponent implements OnInit {
  @Input() suggestion: any;
  
  ngOnInit(): void {
  }
}

