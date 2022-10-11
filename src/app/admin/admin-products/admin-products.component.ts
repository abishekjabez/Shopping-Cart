import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
 // data$:Observable<any>
  data2$:Observable<any>
  data3$:Observable<any> | undefined



  constructor(public api:ApiService,) {
    
    this.data3$=this.api.getProducts('Dairy').snapshotChanges();
    this.data2$=this.api.getCategory().snapshotChanges();
   }

  ngOnInit(): void {
  }


list:any=[];

selected(value:any){
  
  this.data3$=this.api.getProducts(value).snapshotChanges();
  console.log(this.data3$);
}

  

onDelete(item:any,category:any): void{
  console.log(item)
  if(confirm("Are you sure?")){
    this.api.deleteData(item,category);

  }
  


}






}
