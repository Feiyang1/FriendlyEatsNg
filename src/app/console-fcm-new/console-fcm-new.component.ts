import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-console-fcm-new',
  templateUrl: './console-fcm-new.component.html',
  styleUrls: ['./console-fcm-new.component.css']
})
export class ConsoleFcmNewComponent implements OnInit {

  notificationFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder, public dialogRef: MatDialogRef<ConsoleFcmNewComponent>) { }

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

  onSend() {
    this.dialogRef.close();
  }
}
