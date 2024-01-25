import { Component, inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { AddFeedbackModalComponent } from '../add-feedback-modal/add-feedback-modal.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  menuItems: any[] = [
    { id: 12, name: 'Most Upvotes' },
    { id: 13, name: 'Least Upvotes' },
    { id: 14, name: 'Most Comments' },
    { id: 15, name: 'Least Upvotes' },
  ];

  constructor(public dialogRef: MatDialog) { }

  openModal() {
    // open modal to create feedback
    let dialogRef = this.dialogRef.open(AddFeedbackModalComponent, {
      // width: '1000px',
      // height: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result, 'result');
    })
  }
}
