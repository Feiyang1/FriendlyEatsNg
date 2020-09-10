import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RcParameter } from 'src/models/rc';

@Component({
  selector: 'app-console-rc-edit',
  templateUrl: './console-rc-edit.component.html',
  styleUrls: ['./console-rc-edit.component.css']
})
export class ConsoleRcEditComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ConsoleRcEditComponent>, @Inject(MAT_DIALOG_DATA) public data: RcParameter<unknown>) { }

  ngOnInit(): void {
  }

  onUpdate(): void {
    this.dialogRef.close(this.data);
  }
}
