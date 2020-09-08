import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { RcService } from '../rc.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];
  constructor(private router: Router, restaurantService: RestaurantService) { 
    this.restaurants = restaurantService.getRestaurants();
  }

  ngOnInit(): void {
  }

  onSelect(id: number) {
    console.log('onSelect', id);
    this.router.navigate([`restaurant/${id}`]);
  }
}