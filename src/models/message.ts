import { Audience } from 'src/app/fake-analytics.service';

export interface Message {
    title?: string;
    text: string;
    target?: Target;
    timestamp: number;
    status: string;
    platform: string;

}

export interface Target {
    audience?: Audience
}