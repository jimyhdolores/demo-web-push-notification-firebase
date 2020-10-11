export interface INotificationPayload {
    title?: string;
    body?: string;
}
export interface MessagePayload {
    notification?: INotificationPayload;
    data?: { [key: string]: string };
}