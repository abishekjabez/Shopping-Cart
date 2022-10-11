import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  data$:Observable<any>;
  //data2$:Observable<any>;
  constructor(public api:ApiService) {

     // this.data$=this.db.list('/Store').valueChanges();

     // this.data2$=this.db.object('Store/1').valueChanges();
this.data$=this.api.getCategory().valueChanges();
   }
   
  ngOnInit(): void {

    // const ref=this.db.list('/Store/');
    // ref.valueChanges().subscribe((data)=>{
    //   this.data=data
    // })
  }

}
