import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() total: number;
  @Input() score: number;

  @Output() scoreChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(score: number): void {
    this.score = score;
    this.scoreChanged.emit(score);
  }

}
