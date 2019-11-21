import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HomeComponent } from './ui/home.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductHomeComponent } from './products/product-home.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { ProductCreateComponent } from './products/product-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    ProductHomeComponent,
    ProductDetailsComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
