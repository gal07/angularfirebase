import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList  } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-database-realtime',
  templateUrl: './database-realtime.component.html',
  styleUrls: ['./database-realtime.component.css']
})
export class DatabaseRealtimeComponent implements OnInit {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(

    public db:AngularFireDatabase,

  )
  { 
    this.itemsRef = db.list('shoping-list');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    console.log(this.itemsRef);

    // list.push({'itemName':'Mochi','itemNumber':93900});

  }

  addItem(newName: string) {
    this.itemsRef.push({ itemName: newName,itemNumber : 92828 });
  }
  updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { itemName: newText });
  }
  deleteItem(key: string) {
    this.itemsRef.remove(key);
  }
  deleteEverything() {
    this.itemsRef.remove();
  }

  ngOnInit() {



  }


}
