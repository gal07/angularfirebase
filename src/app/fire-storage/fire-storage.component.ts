import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-fire-storage',
  templateUrl: './fire-storage.component.html',
  styleUrls: ['./fire-storage.component.css']
})
export class FireStorageComponent implements OnInit {
  uploadPercent: Observable<number>;

  constructor(private storage: AngularFireStorage) { }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'testing/'+file.name;
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
  }

  ngOnInit() {
  }

}
