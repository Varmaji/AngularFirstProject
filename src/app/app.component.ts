import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
