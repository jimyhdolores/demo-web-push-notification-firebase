import { Injectable } from '@angular/core';
import firebase from "firebase";
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { MessagePayload } from './messagePayload';
@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {
  messagingFirebase: firebase.messaging.Messaging;

  constructor() {
    firebase.initializeApp(environment.firebaseConfig);
    this.messagingFirebase = firebase.messaging()
  }

  requestPermission = () => {
    return new Promise(async (resolve, reject) => {
      const permisos = await Notification.requestPermission();
      if (permisos === "granted") {
        const tokeFirebase = await this.messagingFirebase.getToken()
        resolve(tokeFirebase)
      } else {
        reject(new Error("No se otorgaron los permisos"))
      }
    });
  }

  private messaginObervable = new Observable<MessagePayload>(subscriber => {
    this.messagingFirebase.onMessage((payload) => {
      subscriber.next(payload);
    });
  });

  receiveMessage() {
    return this.messaginObervable;
  }
}
