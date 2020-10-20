import { Injectable } from '@angular/core';
import { openDB, IDBPDatabase } from 'idb';
import { AnalyticsState, AppState, FCMState, RCState, TutorialState } from 'src/models/state';

const DB_NAME = 'FIRENDLYEATS_DEMO_DATABASE';
const STORE_NAME = 'FIRENDLYEATS_DEMO_STORE';
const VERSION = 1;
const APP_STATE_KEY = 'app';
const RC_STATE_KEY = 'rc';
const FCM_STATE_KEY = 'fcm';
const ANALYTICS_STATE_KEY = 'analytics';
const TUTORIAL_STATE_KEY = 'tutorial';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
  private _dbPromise!: Promise<IDBPDatabase>;
  constructor() {
    this.init();
  }

  private init() {
    this._dbPromise = openDB(DB_NAME, VERSION, {
      upgrade(db, oldVersion, _newVersion, _transaction) {
        switch (oldVersion) {
          case 0:
            db.createObjectStore(STORE_NAME);
        }
      }
    });
  }

  async getAppState(): Promise<AppState | undefined> {
    const db = await this._dbPromise;
    return db.get(STORE_NAME, APP_STATE_KEY);
  }

  async setAppState(state: AppState) {
    const db = await this._dbPromise;
    return db.put(STORE_NAME, state, APP_STATE_KEY);
  }

  async getRCState(): Promise<RCState | undefined> {
    const db = await this._dbPromise;
    return db.transaction(STORE_NAME).objectStore(STORE_NAME).get(RC_STATE_KEY);
  }

  async setRCState(state: RCState) {
    const db = await this._dbPromise;
    return db.put(STORE_NAME, state, RC_STATE_KEY);
  }

  async getFCMState(): Promise<FCMState | undefined> {
    const db = await this._dbPromise;
    return db.transaction(STORE_NAME).objectStore(STORE_NAME).get(FCM_STATE_KEY);
  }

  async setFCMState(state: FCMState) {
    const db = await this._dbPromise;
    return db.put(STORE_NAME, state, FCM_STATE_KEY);
  }

  async getAnalyticsState(): Promise<AnalyticsState | undefined> {
    const db = await this._dbPromise;
    return db.transaction(STORE_NAME).objectStore(STORE_NAME).get(ANALYTICS_STATE_KEY);
  }

  async setAnalyticsState(state: AnalyticsState) {
    const db = await this._dbPromise;
    return db.put(STORE_NAME, state, ANALYTICS_STATE_KEY);
  }

  async getTutorialState(): Promise<TutorialState | undefined> {
    const db = await this._dbPromise;
    return db.transaction(STORE_NAME).objectStore(STORE_NAME).get(TUTORIAL_STATE_KEY);
  }

  async setTutorialState(state: TutorialState) {
    const db = await this._dbPromise;
    return db.put(STORE_NAME, state, TUTORIAL_STATE_KEY);
  }

}
