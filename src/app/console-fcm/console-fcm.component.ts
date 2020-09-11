import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConsoleFcmNewComponent } from '../console-fcm-new/console-fcm-new.component';

@Component({
  selector: 'app-console-fcm',
  templateUrl: './console-fcm.component.html',
  styleUrls: ['./console-fcm.component.css']
})
export class ConsoleFcmComponent implements OnInit {
  columns = [
    "Notification",
    "Status",
    "Platform",
    "Send"
  ]
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onNew(): void {
    this.dialog.open(ConsoleFcmNewComponent);
  }

}
