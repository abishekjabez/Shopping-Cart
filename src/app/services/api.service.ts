import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private db:AngularFireDatabase) { }


getCategory()
{return this.db.list('/categories');}

postData(value:any,category:any)
{return this.db.list('categories/'+category).push(value);}

getProducts(category:any)
{return this.db.list('categories/'+category);}

getProductWithId(pageId:any,categoryId:any)
{return this.db.object('/categories/'+categoryId+'/'+pageId).valueChanges();}

updateProduct(id:any,categoryId:any,value:any)
{return this.db.object('/categories/'+categoryId+'/'+id).update(value);}

deleteData(value:any,category:any)
{return this.db.object('/categories/'+category+'/'+value).remove();}


postDataToCart(value:any)
{return this.db.list('cart/').push(value);}

getDataFromCart()
{return this.db.list('cart/');}

deleteItemFromCart(value:any){
  return this.db.object('cart/'+value).remove();
}

clearCart(){
  return this.db.list('cart/').remove();

}


}