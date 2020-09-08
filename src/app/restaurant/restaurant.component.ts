import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from 'src/models/restaurant';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { RcService } from '../rc.service';

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
    private restaurantService: RestaurantService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.restaurant = this.restaurantService.getRestaurants().find(r => r.id === id);
  }

  onCancel(): void {
    this.router.navigate(['']);
  }

}
