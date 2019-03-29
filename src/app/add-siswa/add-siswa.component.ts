import { Component, OnInit, ɵReflectionCapabilities } from '@angular/core';
import { FormBuilder,Validators,FormGroup,FormControl } from '@angular/forms';
import { AngularFirestore,AngularFirestoreCollection   } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item {id:number,item:string,price:number,qty:number;}
export interface Biodata {
  nisn:number,
  name:string,
  tgl_lahir:string,
  tempat_lahir:string,
  asal_sekolah:string,
  alamat:string,
  email:string,
  orangtua:object,
  role:string,
  nama_wali:string,
  pekerjaan_wali:string,
  penghasilan_wali:string,
  alamat_wali:string,
  telp_wali:number,
  email_wali:string;
}


@Component({
  selector: 'app-add-siswa',
  templateUrl: './add-siswa.component.html',
  styleUrls: ['./add-siswa.component.css']
})
export class AddSiswaComponent{
  private itemsCollection: AngularFirestoreCollection<Biodata>;
  items: Observable<Biodata[]>;


  addSiswa = new FormGroup({
    nisn:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    tgl_lahir:new FormControl('',Validators.required),
    tempat_lahir:new FormControl('',Validators.required),
    asal_sekolah:new FormControl('',Validators.required),
    alamat: new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    sebagai:new FormControl('',Validators.required),
    nama_sebagai:new FormControl('',Validators.required),
    pekerjaan_sebagai:new FormControl('',Validators.required),
    penghasilan_sebagai:new FormControl('',Validators.required),
    alamat_sebagai:new FormControl('',Validators.required),
    telp_sebagai:new FormControl('',Validators.required),
    email_sebagai:new FormControl('',[Validators.required,Validators.email]),
  })


  constructor(private fb:FormBuilder,private afs: AngularFirestore) {

    this.itemsCollection = this.afs.collection<Biodata>('biodata');

    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.doc.id, ...c.payload.doc.data() }))
      )
    );

    this.itemsCollection.doc("LA").set({
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    })

  }

  ngOnInit() {
  }

  addItem(data) {
    try {
      this.afs.collection<Biodata>('biodata').add(
            {
              nisn:data.nisn,
              name:data.name,
              tgl_lahir:data.tgl_lahir,
              tempat_lahir:data.tempat_lahir,
              asal_sekolah:data.asal_sekolah,
              alamat:data.alamat,
              email:data.email,
              orangtua:{
                role:data.sebagai,
                nama_wali:data.nama_sebagai,
                pekerjaan_wali:data.pekerjaan_sebagai,
                penghasilan_wali:data.penghasilan_sebagai,
                alamat_wali:data.alamat_sebagai,
                telp_wali:data.telp_sebagai,
                email_wali:data.email_sebagai,
              }
            }
          );
          alert('saved');
      // this.itemsCollection.add({ id:Math.floor(Math.random() * 100) + 1,item:item,price:parseInt(price),qty:parseInt(qty) });
    } catch (error) {
      console.log(error);
    }
  }

  submitMethod(){
    
    // this.itemsCollection = this.afs.collection<Biodata>('biodata',ref => ref.where('size', '==', 'large'));

    this.afs.firestore.doc('biodata/'+this.addSiswa.value.nisn).get()
    .then(docSnapshot => {
      if (docSnapshot.exists) {
       alert('Nisn Sudah Ada');
      }else{
        this.addItem(this.addSiswa.value);
      }
    });

    this.addSiswa.reset;
  }

}
