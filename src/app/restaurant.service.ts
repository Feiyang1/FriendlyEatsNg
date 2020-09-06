import { Injectable } from '@angular/core';
import { Restaurant } from 'src/models/restaurant';
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
}
