import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormControl, Validators,NgForm} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product:any={};
data:any;

  constructor(public api:ApiService,
    private router:Router,
    public route:ActivatedRoute,) {
      //this.firstFunction() 
    }

  ngOnInit(): void {
  }


  save(value:any){
    this.api.postData(value,value.category);
    console.log(value)
    this.router.navigate(['/add-product'])
   
  }

  // firstFunction(){

  //   let list:any=[];
  //   let temp:number;
  //   let pageId=this.route.snapshot.paramMap.get('id');
  //   if(pageId){
  //     temp=parseInt(pageId);
  //     this.api.get().subscribe(e=>{
  //       list=e;
  //       list=list.filter((Object:any)=>{
  //         return Object.id === temp;});
  
  //         this.api.cartDataStorage(list);
          
  //         this.product=list[0];
  //         //console.log("this is after product",this.product,)
  //       });
  //     } 
  // }
}
