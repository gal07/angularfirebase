import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';


@Component({
  selector: 'app-fire-cloud-messaging',
  templateUrl: './fire-cloud-messaging.component.html',
  styleUrls: ['./fire-cloud-messaging.component.css']
})
export class FireCloudMessagingComponent implements OnInit {

  constructor(private afMessaging: AngularFireMessaging) { }
  requestPermission() {
    this.afMessaging.requestPermission
      .subscribe(
        (s) => { console.log('Permission granted!'); },
        (error) => { console.error(error); },  
      );
  }

  ngOnInit() {
  }

}
