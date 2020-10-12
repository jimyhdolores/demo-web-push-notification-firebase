import { Component, OnInit } from '@angular/core';
import { PushNotificationService } from './services/push-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mesaggeReceived = '';

  constructor(private notificacion: PushNotificationService) {
    notificacion.requestPermission().then(token => {
      console.log(token);
    })
  }

  ngOnInit(): void {
    this.notificacion.receiveMessage().subscribe(payload => {
      console.log(payload);
      this.mesaggeReceived = payload.notification.title;
    })
  }
}
