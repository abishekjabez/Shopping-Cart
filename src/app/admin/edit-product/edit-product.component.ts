import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

product:any={};
data:any;
pageId:any;
categoryId:any;
overlay:boolean=false;

  
constructor(public api:ApiService,
            private router:Router,
            public route:ActivatedRoute,)  
    { 

      this.pageId=this.route.snapshot.paramMap.get('id');
      this.categoryId=this.route.snapshot.paramMap.get('category');
      if(this.pageId)
      {
        this.data=this.api.getProductWithId(this.pageId,this.categoryId).pipe(take(1)).subscribe(e=>{this.product=e;})
        }
      }
    
  ngOnInit(): void {
 
  }



  save(value:any):void
  {
    this.api.updateProduct(this.pageId,this.categoryId,value);
    this.overlay=true;
    
  }


reRoute(){
  this.router.navigate(['/admin/admin-product']);
}

}
