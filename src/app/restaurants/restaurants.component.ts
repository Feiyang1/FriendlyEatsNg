import { Component, OnInit } from '@angular/core';
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

  roundTile$: Observable<boolean>;
  constructor(private router: Router, private restaurantService: RestaurantService, private rc: RcService) {
  }

  get restaurants() {
    return this.restaurantService.restaurants;
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
    this.router.navigate([`restaurant/${id}`]);
  }
}