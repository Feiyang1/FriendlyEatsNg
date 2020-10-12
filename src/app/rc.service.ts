import { Injectable } from '@angular/core';
import { RcParameter } from 'src/models/rc';
import { BehaviorSubject, Observable } from 'rxjs';
import { PersistenceService } from './persistence.service';

const DEFAULT_PARAMETERS = [{
  name: 'dark',
  value: true
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

  constructor(private persistenceService: PersistenceService) {
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