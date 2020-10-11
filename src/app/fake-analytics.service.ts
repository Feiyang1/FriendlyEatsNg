import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAnalyticsService {
  private _wroteReview = false;
  constructor() { }

  get wroteReview () {
    return this._wroteReview;
  }

  set wroteReview(wrote: boolean) {
    this._wroteReview = wrote;
  }
}

export enum Audience {
  All = 'all',
  Reviewers = 'reviewers'
}