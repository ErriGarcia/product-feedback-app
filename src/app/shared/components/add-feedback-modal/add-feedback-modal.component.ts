import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-feedback-modal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './add-feedback-modal.component.html',
  styleUrl: './add-feedback-modal.component.scss'
})
export class AddFeedbackModalComponent implements OnInit {
  title: string = 'Create New Feedback';
  labelInput: string = 'Feedback Title'
  descriptionInput: string = 'Add a short, descriptive headline';
  labelCategory: string = 'Category';
  descriptionCategory: string = 'Choose a category for your feedback';
  labelTextarea: string = 'Feedback Detail';
  descriptionTextarea: string = 'Include any specific comments on what should be improved, added, etc.';
  addFeedbackButton: string = 'Add Feedback';
  cancelButton: string = 'Cancel'

  categories: any[] = [
    {id: 1, name: 'All'}, 
    {id: 2, name: 'UI'}, 
    {id: 3, name: 'UX'}, 
    {id: 4, name: 'Enhancement'}, 
    {id: 5, name: 'Bug'}, 
    {id: 6, name: 'Feature'}
  ];

  constructor(public dialogRef: MatDialogRef<AddFeedbackModalComponent>) { }

  ngOnInit(): void {
    
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
