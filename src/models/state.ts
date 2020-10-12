import { Message } from './message';
import { RcParameter } from './rc';
import { Restaurant } from './restaurant';

export interface ConsoleState {
    rc: RcParameter<unknown>[];
    fcm: Message[];
    wroteReview: boolean;
}

export interface AppState {
    restaurants: Restaurant[];
}