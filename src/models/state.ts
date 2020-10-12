import { Message } from './message';
import { RcParameter } from './rc';
import { Restaurant } from './restaurant';

export interface RCState {
    parameters: RcParameter<unknown>[];
}

export interface FCMState {
    messages: Message[];
}

export interface AnalyticsState {
    wroteReview: boolean;
}

export interface AppState {
    restaurants: Restaurant[];
}