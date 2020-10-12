import { Injectable } from '@angular/core';
import { PersistenceService } from './persistence.service';

@Injectable({
  providedIn: 'root'
})
export class FakeAnalyticsService {
  private _wroteReview = false;
  constructor(private persistenceService: PersistenceService) {
    this.init();
  }

  private async init() {
    const analyticsState = await this.persistenceService.getAnalyticsState();

    if (analyticsState) {
      this._wroteReview = analyticsState.wroteReview;
    }
  }

  get wroteReview() {
    return this._wroteReview;
  }

  set wroteReview(wrote: boolean) {
    this._wroteReview = wrote;
    this.save();
  }

  private save() {
    return this.persistenceService.setAnalyticsState({
      wroteReview: this._wroteReview
    });
  }
}

export enum Audience {
  All = 'all',
  Reviewers = 'reviewers'
}