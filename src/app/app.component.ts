import { Component, OnInit } from '@angular/core';
import { PushNotificationService } from './service/push-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mesaggeReceived = 'sssssss';

  constructor(private notification: PushNotificationService) {
    this.notification.requestPermission().then(token => {
      console.log(token);
    });
  }
  ngOnInit(): void {
    this.notification.receiveMessage().subscribe((message) => {
      console.log(message);
      if (message) {
        this.mesaggeReceived = message.notification.body;
      }
    })
  }
}
