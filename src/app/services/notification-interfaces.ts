export interface INotificationPayload {
    body?: string;
    title?: string;
}
export interface MessagePayload {
    notification: INotificationPayload,
    data?: { [key: string]: string }
}