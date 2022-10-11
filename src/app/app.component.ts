import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingCart';
  cartData$:Observable<any> |undefined
  cartData:any;
  
  constructor(public api:ApiService){
this.cartCounter();
  }

  // saveData(inputValue:string){
  //   const ref=this.db.list('list');
  
  //   ref.push(inputValue).then((resp)=>{
  //     console.log(resp);
  //   }).catch((errors=>{
  //     console.error(errors);
  //   }))
  
  // }
cartCounter(){
  this.api.getDataFromCart().valueChanges().subscribe(e=>{this.cartData=e.length; console.log(this.cartData);});
 
}


 // data:any=[];
ngOnInit(): void {
    // const ref=this.db.list('list');
    // ref.valueChanges().subscribe((data)=>{
    //   this.data=data
    // })
}


}
