import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';


@Component({
  selector: 'app-fire-function',
  templateUrl: './fire-function.component.html',
  styleUrls: ['./fire-function.component.css']
})
export class FireFunctionComponent implements OnInit {
  data$:any;
  constructor(private fns: AngularFireFunctions) { 
    const callable = fns.httpsCallable('my-fn-name');
    this.data$ = callable({ name: 12332 });
  }

  ngOnInit() {
  }

}
