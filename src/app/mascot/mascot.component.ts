import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mascot',
  templateUrl: './mascot.component.html',
  styleUrls: ['./mascot.component.css']
})
export class MascotComponent implements OnInit {
  showWelcome: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onLetsGo(): void {
    this.showWelcome = false;
  }
}
