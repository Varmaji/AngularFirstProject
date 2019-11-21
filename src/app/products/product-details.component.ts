import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../models/product-model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
@Input() model:ProductModel;//use this @Input() to get values from other classes
  constructor() { }

  ngOnInit() {
  }

  diagnostic()
  {
    return JSON.stringify(this.model);
  }

}
