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
  private _showBubble = true;
  constructor() { }

  updateState(state: TutorialState) {
    this._state = state;

    // reset showBubble state to true
    this._showBubble = true;
  }

  updateShowBubble(show: boolean) {
    this._showBubble = show;
  }

  get state(): TutorialState {
    return this._state;
  }

  get showBubble(): boolean {
    return this._showBubble;
  }
}
