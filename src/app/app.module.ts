import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/ProductList/productList.component';
import { ProductListModule } from './components/ProductList/productList.module';
import { NavBarComponent } from './core/navBar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    ProductListModule,
    RouterModule.forRoot([{
      path: '', component: ProductListComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
