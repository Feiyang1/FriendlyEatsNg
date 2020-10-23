import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TutorialService, TutorialState } from '../tutorial.service';


@Component({
  selector: 'app-mascot',
  templateUrl: './mascot.component.html',
  styleUrls: ['./mascot.component.css'],
  animations: [
    trigger('showHide', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', [
        animate('1s')
      ]),
      transition('hide => show', [
        animate('1s')
      ])
    ])
  ]
})
export class MascotComponent implements OnInit {
  isShowBubble = true;
  constructor(public tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  onLetsGo(): void {
    this.tutorialService.updateState(TutorialState.Main);
  }

  showWelcome(): boolean {
    return this.tutorialService.state === TutorialState.Welcome;
  }

  showMain(): boolean {
    return this.tutorialService.state === TutorialState.Main;
  }

  showRc(): boolean {
    return this.tutorialService.state === TutorialState.Rc;
  }

  showRcDark(): boolean {
    return this.tutorialService.state === TutorialState.RcDark;
  }

  showRcRounded(): boolean {
    return this.tutorialService.state === TutorialState.RcRounded;
  }

  isAnyRc(): boolean {
    return this.showRc() || this.showRcDark() || this.showRcRounded();
  }

  showFcm(): boolean {
    return this.tutorialService.state === TutorialState.Fcm;
  }

  showFcmMsg(): boolean {
    return this.tutorialService.state === TutorialState.FcmMsg;
  }

  isAnyFcm(): boolean {
    return this.showFcm() || this.showFcmMsg();
  }

  hideBubble(): void {
    this.isShowBubble = false;
  }

  toggleBubble(): void {
    this.isShowBubble = !this.isShowBubble;
  }
}
