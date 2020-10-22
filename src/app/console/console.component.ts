import { Component, OnInit } from '@angular/core';
import { TutorialService, TutorialState } from '../tutorial.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  selected: Product = Product.None;
  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  onSelect(product: 'rc' | 'fcm') {
    this.selected = product as Product;

    if (this.selected === Product.FCM) {
      this.tutorialService.updateState(TutorialState.Fcm);
    } else if (this.selected === Product.RC) {
      this.tutorialService.updateState(TutorialState.Rc);
    }
  }
}

enum Product {
  RC = 'rc',
  FCM = 'fcm',
  None = 'none'
}