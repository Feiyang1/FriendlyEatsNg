import { Component, OnInit, Input } from '@angular/core';
import { Restaurant, Star } from 'src/models/restaurant';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { MatDialog } from '@angular/material/dialog';
import { AddReviewComponent } from '../add-review/add-review.component';
import { FakeAnalyticsService } from '../fake-analytics.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  @Input()
  restaurant: Restaurant | undefined;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private dialog: MatDialog,
    private analyticsService: FakeAnalyticsService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.restaurant = this.restaurantService.getRestaurants().find(r => r.id === id);
  }

  onCancel(): void {
    this.router.navigate(['']);
  }

  onAddReview(): void {
    this.dialog.open(AddReviewComponent).afterClosed().subscribe((result?: { rating: number, comment: string }) => {
      if (result) {
        this.restaurantService.addReview(this.restaurant.id, {
          star: result.rating as Star,
          comment: result.comment,
          userName: 'Me',
          timestamp: new Date()
        });

        this.analyticsService.wroteReview = true;
      }
    });
  }
}
