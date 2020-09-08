import { Component, OnInit } from '@angular/core';
import { RcService } from '../rc.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  darkTheme = false;
  constructor(private config: RcService) { }

  ngOnInit(): void {
    this.darkTheme = this.config.config.dark;
  }

}
