import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  data$:Observable<any>;
  //data2$:Observable<any>;
  data3$:Observable<any> | undefined
  cartData:any={};

  overlay:boolean=false;

  
  constructor(public api:ApiService) { 
    this.data3$=this.api.getProducts('Dairy').snapshotChanges();
    //this.getValuesFromCart()
   
    this.data$=this.api.getCategory().snapshotChanges();
    //this.data2$=this.api.getProducts('Meat').snapshotChanges();
    
  }

  ngOnInit(): void {
  }
  
  selected(value:any){
  
    this.data3$=this.api.getProducts(value).snapshotChanges();
    //console.log("this is data3$",value);
  }


  addToCart(value:any){
    
    this.api.postDataToCart(value);
    this.overlay=true;
   // console.log("posted",value)
    

  }
  
getValuesFromCart(){

  this.cartData=this.api.getDataFromCart().valueChanges().subscribe(e=>{this.cartData=e;})
 // console.log(this.cartData);
  
  
}

reRoute(){
 this.overlay=false;
}
}
