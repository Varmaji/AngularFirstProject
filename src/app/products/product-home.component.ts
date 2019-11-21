import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { MockProductService } from '../service/mock-product.service';


@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  listofProducts:ProductModel[];
  selectedProduct:ProductModel;
  constructor(
    private service:MockProductService //Injecting the service in to this component
  ) { }

  ngOnInit() {
 // this.listofProducts=productList;
 this.listofProducts=this.service.getAllProducts();
  this.selectedProduct=new ProductModel(0,'',0,0,0,false);
  }

  select(item){
    //this.selectedProduct=item;
    this.selectedProduct=this.service.getDetails(item.ProductId);
      }

    update(item:ProductModel){
      //TODO
    }

    create(item:ProductModel){
      //TODO
    }

    remove(item:ProductModel){
      //TODO
    }


}
