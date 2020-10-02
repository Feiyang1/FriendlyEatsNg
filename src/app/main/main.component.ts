import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsComponent } from '../notifications/notifications.component';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  darkTheme$: Observable<boolean>;
  constructor(private messages: MessagesService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onNotificationClick() {
    this.dialog.open(NotificationsComponent).afterClosed().subscribe(() => {
      this.messages.resetUnreadMessage();
    });
  }

  get numOfNotifications() {
    return this.messages.unreadMessage.length;
  }

}
