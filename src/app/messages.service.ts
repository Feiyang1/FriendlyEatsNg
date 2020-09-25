import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private _messagesHistory: Message[] = [];
  private _messages = new Subject<Message>();
  public readonly messages: Observable<Message> = this._messages.asObservable();

  constructor() { }

  send(msg: Message) {
    this._messages.next(msg);
    this._messagesHistory = [...this._messagesHistory, msg];
  }

  get messagesHistory() {
    return this._messagesHistory;
  }
}
