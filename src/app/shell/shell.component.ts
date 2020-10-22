import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, skip, switchMap, take } from 'rxjs/operators';
import { RcParameter } from 'src/models/rc';
import { RcService } from '../rc.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  darkTheme$: Observable<boolean>;
  fakeLoading$: Observable<boolean>;
  constructor(private rc: RcService) { }

  ngOnInit(): void {
    this.darkTheme$ = this.rc.parameters.pipe(map(parameters => {
      const param = parameters.find(p => p.name === 'dark_mode') as RcParameter<boolean>;

      if (param) {
        return param.value;
      } else {
        return false;
      }
    }));

    this.fakeLoading$ = this.rc.parameters.pipe(skip(1), switchMap(_val => {
      return timer(0, 1000).pipe(take(2), map(i => i === 0)); // return true, then false;
    }))
  }

}
