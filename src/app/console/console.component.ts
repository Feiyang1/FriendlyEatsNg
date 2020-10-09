import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  selected: Product = Product.RC;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product: 'rc' | 'fcm') {
    this.selected = product as Product;
  }
}

enum Product {
  RC = 'rc',
  FCM = 'fcm'
}