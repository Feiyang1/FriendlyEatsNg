import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RcParameter } from 'src/models/rc';
import { RcService } from '../rc.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
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
