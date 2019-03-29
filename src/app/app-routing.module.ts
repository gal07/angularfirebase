import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabaseRealtimeComponent } from './database-realtime/database-realtime.component';
import { FireStoreComponent } from './fire-store/fire-store.component';
import { OauthComponent } from './oauth/oauth.component';
import { FireStorageComponent } from './fire-storage/fire-storage.component';
import { FireCloudMessagingComponent } from './fire-cloud-messaging/fire-cloud-messaging.component';
import { FireFunctionComponent } from './fire-function/fire-function.component';
import { AddSiswaComponent } from './add-siswa/add-siswa.component';

const routes: Routes = [
  
  { path: 'firebase', component: DatabaseRealtimeComponent },
  { path: 'firestore', component: FireStoreComponent },
  { path: 'Oauth', component: OauthComponent },
  { path: 'storage', component: FireStorageComponent },
  { path: 'firecloud', component: FireCloudMessagingComponent },
  { path: 'function', component: FireFunctionComponent },
  { path: 'addsiswa', component: AddSiswaComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
