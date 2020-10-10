import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { RcService } from '../rc.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RcParameter } from 'src/models/rc';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];
  roundTile$: Observable<boolean>;
  constructor(private router: Router, restaurantService: RestaurantService, private rc: RcService) { 
    this.restaurants = restaurantService.getRestaurants();
  }

  ngOnInit(): void {
    this.roundTile$ = this.rc.parameters.pipe(map(parameters => {
      const param = parameters.find(p => p.name === 'rounded') as RcParameter<boolean>;
      if (param) {
        return param.value;
      } else {
        return false;
      }
    }));
  }

  onSelect(id: number) {
    console.log('onSelect', id);
    this.router.navigate([`restaurant/${id}`]);
  }
}