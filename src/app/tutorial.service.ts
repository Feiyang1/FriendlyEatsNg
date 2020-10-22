import { Injectable } from '@angular/core';

export enum TutorialState {
  Welcome = 'welcome',
  Main = 'main',
  Rc = 'rc',
  RcRounded = 'rcrounded',
  RcDark = 'rcdark',
  Fcm = 'fcm',
  FcmMsg = 'fcmmsg',
  Done = 'done'
}
@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private _state = TutorialState.Welcome;
  constructor() { }

  updateState(state: TutorialState) {
    this._state = state;
  }

  get state(): TutorialState {
    return this._state;
  }
}
