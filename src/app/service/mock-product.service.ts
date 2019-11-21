import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { ProductListComponent } from '../products/product-list.component';

const productList=[
  new ProductModel(101,'Markers',100,100,1,false),
  new ProductModel(102,'Pens',101,200,2,false),
  new ProductModel(103,'Pencils',102,300,3,true),
  new ProductModel(104,'Duster',103,400,4,false),
  new ProductModel(105,'Eraser',104,500,5,true),

]
@Injectable({
  providedIn: 'root'
})
export class MockProductService {

  constructor() { }

  getAllProducts()
  {
    return productList;
  }

  getDetails(productId:number)
  {
    return productList.find(c=>c.ProductId===productId)
  }

  create(item: ProductModel){

  }
}
