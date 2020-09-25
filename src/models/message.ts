export interface Message {
    title?: string;
    text: string;
    target?: unknown;
    timestamp: number;
    status: string;
    platform: string;
}