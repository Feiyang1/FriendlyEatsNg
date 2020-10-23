import { Injectable } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { Observable, Subject } from 'rxjs';
import { EventName } from 'src/models/analytics-events';
import { Message } from '../models/message';
import { Audience, FakeAnalyticsService } from './fake-analytics.service';
import { PersistenceService } from './persistence.service';
import { TutorialService, TutorialState } from './tutorial.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private _messagesHistory: Message[] = [];
  private _unreadMessages: Message[] = [];
  private _messages = new Subject<Message>();
  public readonly messages: Observable<Message> = this._messages.asObservable();

  constructor(
    private _analyticsService: FakeAnalyticsService,
    private persistenceService: PersistenceService,
    private tutorialService: TutorialService,
    private analytics: AngularFireAnalytics
  ) {
    this.init();
  }

  private async init() {
    const fcmState = await this.persistenceService.getFCMState();

    if (fcmState) {
      this._messagesHistory = fcmState.messages;
    }
  }

  send(msg: Message) {
    this._messages.next(msg);
    this._messagesHistory = [...this._messagesHistory, msg];

    // only send the message to the demo app if it fits the targetting condition
    if (msg.target.audience === Audience.All
      || (msg.target.audience === Audience.Reviewers && this._analyticsService.wroteReview)) {
      this._unreadMessages = [...this._unreadMessages, msg];
    }

    this.tutorialService.updateState(TutorialState.FcmMsg);
    this.analytics.logEvent(EventName.SentMsg);
    this.save();
  }

  resetUnreadMessage() {
    this._unreadMessages = [];
  }

  get messagesHistory() {
    return this._messagesHistory;
  }

  get unreadMessage() {
    return this._unreadMessages;
  }

  private save() {
    return this.persistenceService.setFCMState({
      messages: this._messagesHistory
    });
  }
}
