import { Component, OnInit } from '@angular/core';
import { RcService } from '../rc.service';
import { RcParameter } from 'src/models/rc';
import { MatDialog } from '@angular/material/dialog';
import { ConsoleRcEditComponent } from '../console-rc-edit/console-rc-edit.component';
import { Observable } from 'rxjs';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-console-rc',
  templateUrl: './console-rc.component.html',
  styleUrls: ['./console-rc.component.css']
})
export class ConsoleRcComponent implements OnInit {
  parameters$: Observable<RcParameter<unknown>[]>;
  constructor(
    private rcService: RcService,
    private dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.parameters$ = this.rcService.parameters;
  }

  onEdit(param: RcParameter<unknown>): void {
    this.dialog.open(ConsoleRcEditComponent, {
      // pass a copy
      data: { ...param }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.rcService.updateOrAdd(result)
      }
    });
  }
}