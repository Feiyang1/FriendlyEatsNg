import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { generateMockRestaurants } from 'src/mocks';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = generateMockRestaurants(10)
  constructor() { }

  ngOnInit(): void {
  }

}