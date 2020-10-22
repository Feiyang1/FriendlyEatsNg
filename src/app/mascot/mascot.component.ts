import { Component, OnInit } from '@angular/core';
import { TutorialService, TutorialState } from '../tutorial.service';


@Component({
  selector: 'app-mascot',
  templateUrl: './mascot.component.html',
  styleUrls: ['./mascot.component.css']
})
export class MascotComponent implements OnInit {
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

  showFcm(): boolean {
    return this.tutorialService.state === TutorialState.Fcm;
  }

  showFcmMsg(): boolean {
    return this.tutorialService.state === TutorialState.FcmMsg;
  }
}
