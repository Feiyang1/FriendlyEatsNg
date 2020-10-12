import { Injectable } from '@angular/core';
import { openDB, IDBPDatabase } from 'idb';
import { AppState, ConsoleState } from 'src/models/state';

const DB_NAME = 'FIRENDLYEATS_DEMO_DATABASE';
const STORE_NAME = 'FIRENDLYEATS_DEMO_STORE';
const VERSION = 1;
const APP_STATE_KEY = 'app';
const CONSOLE_STATE_KEY = 'console';

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

  async getConsoleState(): Promise<ConsoleState | undefined> {
    const db = await this._dbPromise;
    return db.transaction(STORE_NAME).objectStore(STORE_NAME).get('console');
  }

  async setConsoleState(state: ConsoleState) {
    const db = await this._dbPromise;
    return db.put(STORE_NAME, state, CONSOLE_STATE_KEY);
  }

}
