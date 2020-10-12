import { Injectable } from '@angular/core';
import { Restaurant, Review } from 'src/models/restaurant';
import { generateMockRestaurants } from 'src/mocks';
import { PersistenceService } from './persistence.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private currentRestaurants = []
  private _restaurants = new BehaviorSubject([]);
  readonly restaurants = this._restaurants.asObservable();

  constructor(private persistenceService: PersistenceService) {
    this.init();
  }

  private async init() {
    const appState = await this.persistenceService.getAppState();

    if (appState && appState.restaurants) {
      this.currentRestaurants = appState.restaurants;
    } else {
      this.currentRestaurants = generateMockRestaurants(10);
      this.save();
    }
    this._restaurants.next(this.currentRestaurants);
  }

  addReview(restaurantId: number, review: Review): void {
    const res = this.currentRestaurants.find(r => r.id === restaurantId);
    if (res) {
      res.reviews.push(review);
      this.save();
    }
  }

  private save() {
    return this.persistenceService.setAppState({
      restaurants: this.currentRestaurants
    });
  }
}
