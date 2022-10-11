import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartData$:Observable<any> |undefined
total:any;
cartTotalValue:number=0;

constructor(public api:ApiService, public route:Router) {

    this.fetchData();
   }

  ngOnInit(): void {}

cartTotal(value:any){
  for(let i=0; i<value.length;i++)
    {this.cartTotalValue=this.cartTotalValue+value[i].price;}
}

onDelete(value:any){
  this.api.deleteItemFromCart(value); 

}

clearCart(){
  this.api.clearCart();
  this.cartTotalValue=0;
  location.reload();
  
}

fetchData(){

this.cartData$=this.api.getDataFromCart().snapshotChanges()
this.api.getDataFromCart().valueChanges().subscribe(e=>
{this.cartTotal(e);});
}
}
