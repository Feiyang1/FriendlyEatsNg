import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RcService {

  config: RemoteConfig = {
    dark: true,
    round: true
  };
  constructor() { }

  getConfig(): RemoteConfig {
    return this.config;
  }
}

interface RemoteConfig {
  dark: boolean;
  round: boolean;
}