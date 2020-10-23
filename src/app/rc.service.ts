import { Injectable } from '@angular/core';
import { RcParameter } from 'src/models/rc';
import { BehaviorSubject, Observable } from 'rxjs';
import { PersistenceService } from './persistence.service';
import { TutorialService, TutorialState } from './tutorial.service';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { EventName } from 'src/models/analytics-events';

const DEFAULT_PARAMETERS = [{
  name: 'dark_mode',
  value: false
}, {
  name: 'rounded',
  value: false
}];

@Injectable({
  providedIn: 'root'
})
export class RcService {

  private currentParameters: RcParameter<unknown>[] = [];

  private _parameters = new BehaviorSubject(this.currentParameters);

  public readonly parameters: Observable<RcParameter<unknown>[]> = this._parameters.asObservable();

  constructor(
    private persistenceService: PersistenceService,
    private tutorialService: TutorialService,
    private analytics: AngularFireAnalytics
  ) {
    this.init();
  }

  private async init() {
    const rcState = await this.persistenceService.getRCState();

    if (rcState) {
      this.currentParameters = rcState.parameters;
    } else {
      this.currentParameters = DEFAULT_PARAMETERS;
      this.save();
    }

    this._parameters.next(this.currentParameters);
  }

  updateOrAdd<T>(parameter: RcParameter<T>): void {
    const existingParameter = this.currentParameters.find(p => p.name === parameter.name);
    if (existingParameter) {
      if (existingParameter.name === 'dark_mode') {
        if (existingParameter.value === false && (parameter.value as unknown) === true) {
          this.tutorialService.updateState(TutorialState.RcDark);
        } else {
          this.tutorialService.updateState(TutorialState.Rc);
        }
        this.analytics.logEvent(EventName.ChangedDarkMode);
      } else if (existingParameter.name === 'rounded') {
        this.tutorialService.updateState(TutorialState.RcRounded);
        this.analytics.logEvent(EventName.ChangedRounded);
      }
      existingParameter.value = parameter.value;
    } else {
      this.currentParameters.push(parameter);
    }
    this._parameters.next(this.currentParameters);
    this.save();
  }

  private save() {
    return this.persistenceService.setRCState({
      parameters: this.currentParameters
    });
  }
}