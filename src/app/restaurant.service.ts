import { Injectable } from '@angular/core';
import { Restaurant, RestaurantImpl, Review } from 'src/models/restaurant';
import { generateMockRestaurants } from 'src/mocks';
import { PersistenceService } from './persistence.service';
import { BehaviorSubject } from 'rxjs';
import { FakeAnalyticsService } from './fake-analytics.service';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { EventName } from 'src/models/analytics-events';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private currentRestaurants = []
  private _restaurants = new BehaviorSubject([]);
  readonly restaurants = this._restaurants.asObservable();

  constructor(
    private persistenceService: PersistenceService,
    private analyticsService: FakeAnalyticsService,
    private analytics: AngularFireAnalytics
  ) {
    this.init();
  }

  private async init() {
    const appState = await this.persistenceService.getAppState();

    if (appState && appState.restaurants) {
      this.currentRestaurants = appState.restaurants.map(deserializeRestaurant);
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
      this.analyticsService.wroteReview = true;
      this.analytics.logEvent(EventName.WroteReview);
    }
  }

  private save() {
    return this.persistenceService.setAppState({
      restaurants: this.currentRestaurants
    });
  }
}

function deserializeRestaurant(res: Restaurant): RestaurantImpl {
  return new RestaurantImpl(res.id, res.name, res.category, res.city, res.price, res.description, res.photoUrl, res.reviews);
}