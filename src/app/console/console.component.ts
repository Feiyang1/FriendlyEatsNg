import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { TutorialService, TutorialState } from '../tutorial.service';
import { EventName } from '../../models/analytics-events';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  selected: Product = Product.None;
  constructor(private tutorialService: TutorialService, private analytics: AngularFireAnalytics) { }

  ngOnInit(): void {
  }

  onSelect(product: 'rc' | 'fcm') {
    this.selected = product as Product;

    if (this.selected === Product.FCM) {
      this.tutorialService.updateState(TutorialState.Fcm);
      this.analytics.logEvent(EventName.VisitedFcm);
    } else if (this.selected === Product.RC) {
      this.tutorialService.updateState(TutorialState.Rc);
      this.analytics.logEvent(EventName.VisitedFcm);
    }
  }
}

enum Product {
  RC = 'rc',
  FCM = 'fcm',
  None = 'none'
}