import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
// Importamos el modulo de paginacion para la aplicacion --npm install ngx-pagination
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { StoreComponent } from './pages/store/store.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartSummaryComponent } from './pages/cart-summary/cart-summary.component';
import { CartDetailComponent } from './pages/cart-detail/cart-detail.component';
//import { AdminModule } from "./admin/admin.module";
import { Cart } from "./model/cart";
import { Order } from "./model/order";
import { ProductService } from './services/product.service';
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [AppComponent, StoreComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [ProductService,Cart,Order,OrderService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
