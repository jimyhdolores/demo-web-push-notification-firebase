import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { MessagePayload } from './notification-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {
  messagingFirebase: firebase.messaging.Messaging;

  constructor() {
    firebase.initializeApp(environment.configFirebase);
    this.messagingFirebase = firebase.messaging();
  }

  requestPermission = () => {
    return new Promise(async (resolve, reject) => {
      const permsis = await Notification.requestPermission();
      if (permsis === "granted") {
        const tokenFirebase = await this.messagingFirebase.getToken();
        resolve(tokenFirebase);
      } else {
        reject(new Error("No se otorgaron los permisos"))
      }
    })
  }

  private messaginObservable = new Observable<MessagePayload>(observe => {
    this.messagingFirebase.onMessage(payload => {
      observe.next(payload)
    })
  })

  receiveMessage() {
    return this.messaginObservable;
  }

}
