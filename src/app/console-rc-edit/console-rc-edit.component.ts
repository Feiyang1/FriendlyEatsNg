import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-console-rc-edit',
  templateUrl: './console-rc-edit.component.html',
  styleUrls: ['./console-rc-edit.component.css']
})
export class ConsoleRcEditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
