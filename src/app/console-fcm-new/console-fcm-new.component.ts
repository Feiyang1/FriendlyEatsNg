import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Message } from 'src/models/message';
import { Audience } from '../fake-analytics.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-console-fcm-new',
  templateUrl: './console-fcm-new.component.html',
  styleUrls: ['./console-fcm-new.component.css']
})
export class ConsoleFcmNewComponent implements OnInit {

  notificationFormGroup: FormGroup;
  audience: Audience = Audience.All;
  audienceOptions = [
    {
      name: 'All users',
      value: Audience.All
    },
    {
      name: 'People who has submitted reviews',
      value: Audience.Reviewers
    }
  ];
  constructor(
    private messagesService: MessagesService,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ConsoleFcmNewComponent>
  ) { }

  ngOnInit(): void {
    this.notificationFormGroup = this._formBuilder.group({
      titleCtrl: [],
      textCtrl: ['', Validators.required]
    });
  }

  get textCtrl() {
    return this.notificationFormGroup.get('textCtrl');
  }

  get invalidTextCtrl() {
    return this.textCtrl.invalid;
  }

  get textCtrlDirtyOrTouched() {
    return this.textCtrl.dirty || this.textCtrl.touched;
  }

  get invalidFormGroup() {
    return this.invalidTextCtrl;
  }

  get titleCtrl() {
    return this.notificationFormGroup.get('titleCtrl');
  }

  onSend() {
    this.messagesService.send(this.createMessage());
    this.dialogRef.close();
  }

  private createMessage(): Message {
    return {
      title: this.titleCtrl.value,
      text: this.textCtrl.value,
      timestamp: new Date().getTime(),
      status: 'Completed',
      platform: 'Web',
      target: {
        audience: this.audience
      }
    };
  }
}
