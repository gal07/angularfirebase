import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireFunctionsModule,FunctionsRegionToken } from '@angular/fire/functions';



import { environment } from './../environments/environment';
import { DatabaseRealtimeComponent } from './database-realtime/database-realtime.component';
import { FireStoreComponent } from './fire-store/fire-store.component';
import { OauthComponent } from './oauth/oauth.component';
import { FireStorageComponent } from './fire-storage/fire-storage.component';
import { FireCloudMessagingComponent } from './fire-cloud-messaging/fire-cloud-messaging.component';
import { FireFunctionComponent } from './fire-function/fire-function.component';
import { AddSiswaComponent } from './add-siswa/add-siswa.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabaseRealtimeComponent,
    FireStoreComponent,
    OauthComponent,
    FireStorageComponent,
    FireCloudMessagingComponent,
    FireFunctionComponent,
    AddSiswaComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFireFunctionsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: FunctionsRegionToken, useValue: 'asia-northeast1' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
