import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcuctListComponent } from './Dashboard/Product/procuct-list/procuct-list.component';
import { ProductDetailComponent } from './Dashboard/Product/product-detail/product-detail.component';
import { ProductMediaComponent } from './Dashboard/Product/product-media/product-media.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcuctListComponent,
    ProductDetailComponent,
    ProductMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
