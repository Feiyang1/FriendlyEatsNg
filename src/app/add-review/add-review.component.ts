import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  review = {
    rating:1,
    comment: ''
  };

  constructor(public dialogRef: MatDialogRef<AddReviewComponent>) { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.dialogRef.close(this.review);
  }

  onRatingChanged(rating: number): void {
    this.review.rating = rating;
  }
}
