import { Component, OnInit } from '@angular/core';
import { RcService } from '../rc.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RcParameter } from 'src/models/rc';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  darkTheme$: Observable<boolean>;
  constructor(private rc: RcService) { }

  ngOnInit(): void {
    this.darkTheme$ = this.rc.parameters.pipe(map(parameters => {
      console.log(parameters);
      const param = parameters.find(p => p.name === 'dark') as RcParameter<boolean>;

      if (param) {
        return param.value;
      } else {
        return false;
      }
    }));
  }

}
