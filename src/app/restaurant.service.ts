import { Injectable } from '@angular/core';
import { Restaurant, Review } from 'src/models/restaurant';
import { generateMockRestaurants } from 'src/mocks';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants = generateMockRestaurants(10);
  constructor() { }

  getRestaurants(): Restaurant[] {
    return this.restaurants;
  }

  addReview(restaurantId: number, review: Review): void {
    const res = this.restaurants.find(r => r.id === restaurantId);
    if (res) {
      res.reviews.push(review);
    }
  }
}
