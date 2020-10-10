import { Injectable } from '@angular/core';
import { RcParameter } from 'src/models/rc';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RcService {

  private _parametersStore: RcParameter<unknown>[] = [{
    name: 'dark',
    value: true
  }, {
    name: 'rounded',
    value: false
  }];

  private _parameters = new BehaviorSubject(this._parametersStore);

  public readonly parameters: Observable<RcParameter<unknown>[]> = this._parameters.asObservable();

  constructor() { }

  updateOrAdd<T>(parameter: RcParameter<T>): void {
    const existingParameter = this._parametersStore.find(p => p.name === parameter.name);
    if (existingParameter) {
      existingParameter.value = parameter.value;
    } else {
      this._parametersStore.push(parameter);
    }
    this._parameters.next(this._parametersStore);
  }
}