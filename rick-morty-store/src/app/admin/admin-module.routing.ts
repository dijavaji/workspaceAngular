import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import {AuthGuard} from "./auth.guard";
import { AuthComponent } from "./auth/auth.component";
import { AdminComponent } from "./admin.component"; 
import { ProductEditorComponent } from "./product-editor/product-editor.component";
import { ProductTableComponent } from "./product-table/product-table.component";
import { OrderTableComponent } from "./order-table/order-table.component";

const appRoutes = [
  { path: "auth", component: AuthComponent},
  { path: "main", component: AdminComponent, canActivate: [AuthGuard],
  	children:[
  		{ path: "products/:mode/:id", component: ProductEditorComponent },
        { path: "products/:mode", component: ProductEditorComponent },
        { path: "products", component: ProductTableComponent },
        { path: "orders", component: OrderTableComponent },
        { path: "**", redirectTo: "products" }
  	]
	},
  

  { path: "**", redirectTo: "auth"}
];


let routing = RouterModule.forChild(appRoutes);


@NgModule({
  imports: [routing],
  exports: [RouterModule],
  providers: [],
})
export class AdminModuleRouting { }