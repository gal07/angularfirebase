import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection   } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Item {
  id:number,
  item:string,
  price:number,
  qty:number;
}

@Component({
  selector: 'app-fire-store',
  templateUrl: './fire-store.component.html',
  styleUrls: ['./fire-store.component.css']
})
export class FireStoreComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Item>;
  private itemsCollection2: AngularFirestoreCollection<Item>;

  items: Observable<Item[]>;
  itemsLow: Observable<Item[]>;
  datas: any;
  item:string;
  price:number;
  qty:number;

  constructor(private afs: AngularFirestore) {
    
    // Top Price
    this.itemsCollection = afs.collection<Item>('shoping-list',ref => {
      return ref.orderBy('price','desc').where('price','>',135000)
    });

    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.doc.id, ...c.payload.doc.data() }))
      )
    );

    // Low Price
    this.itemsCollection2 = afs.collection<Item>('shoping-list',ref => {
      return ref.orderBy('price','desc').where('price','<=',135000)
    });

    this.itemsLow = this.itemsCollection2.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.doc.id, ...c.payload.doc.data() }))
      )
    );


    
  }

  addItem(item,price,qty) {
    try {
      this.itemsCollection.add({ id:Math.floor(Math.random() * 100) + 1,item:item,price:parseInt(price),qty:parseInt(qty) });
    } catch (error) {
      console.log(error);
    }
  }

  removeItem(key:string){
    try {
      this.afs.doc('shoping-list/'+key).delete()
    } catch (error) {
      console.log(error);
    }
  }

  update(key,data){
    try {
      this.afs.doc('shoping-list/'+key).update(
        {
          item:data.item,
          price:parseInt(data.price),
          qty:parseInt(data.qty)
        }
      );
    } catch (error) {
      console.log(error);
    }
  }


  ngOnInit() {
  }

}
