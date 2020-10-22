import { Injectable } from '@angular/core';
import { RcParameter } from 'src/models/rc';
import { BehaviorSubject, Observable } from 'rxjs';
import { PersistenceService } from './persistence.service';
import { TutorialService, TutorialState } from './tutorial.service';

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
    private tutorialService: TutorialService
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
        console.log(existingParameter.value, parameter.value)
        if (existingParameter.value === false && (parameter.value as unknown) === true) {
          this.tutorialService.updateState(TutorialState.RcDark);
        } else {
          this.tutorialService.updateState(TutorialState.Rc);
        }
      } else if (existingParameter.name === 'rounded') {
        this.tutorialService.updateState(TutorialState.RcRounded);
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