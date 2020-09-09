import { Injectable } from '@angular/core';
import { RcParameter } from 'src/models/rc';

@Injectable({
  providedIn: 'root'
})
export class RcService {

  parameters: RcParameter<unknown>[] = [{
    name: 'dark',
    value: true
  }, {
    name: 'round',
    value: false
  }];
  constructor() { }

  getConfig(): RcParameter<unknown>[] {
    return this.parameters;
  }

  updateOrAdd<T>(parameter: RcParameter<T>): void {
    const existingParameter = this.parameters.find(p => p.name === parameter.name);
    if (existingParameter) {
      existingParameter.value = parameter.value;
    } else {
      this.parameters.push(parameter);
    }
  }
}