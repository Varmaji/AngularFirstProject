import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'product-app';

  obj={id:100,name:"Canarys"};

  show()
  {
    return `ID: ${this.obj.id}, NAME:${this.obj.name}`;

  }

  update()
  {
    this.obj.name="Canarys Automations";
  }

}
