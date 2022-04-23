import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoreComponent} from "./pages/store/store.component";
import {CartDetailComponent} from "./pages/cart-detail/cart-detail.component";
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import { AuthGuard } from "./auth-guard.guard";

const routes: Routes = [
	//aqui agregamos las rutas
	{ 
		path: "store", component: StoreComponent, 
		canActivate: [AuthGuard]
	},
    { 
    	path: "cart", component: CartDetailComponent,
    	canActivate: [AuthGuard]
    },
    { 
    	path: "checkout",component: CheckoutComponent,
    	canActivate: [AuthGuard] 
    },
    {
	    path: "admin",
	    loadChildren: "./admin/admin.module#AdminModule",
	    canActivate: [AuthGuard]
    },	
    { path: "**", redirectTo: "/store" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
