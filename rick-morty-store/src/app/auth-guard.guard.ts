import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, RouterStateSnapshot,Router } from "@angular/router";
import { StoreComponent } from "./pages/store/store.component";

@Injectable()
export class AuthGuard {
    
	private firstNavigation = true;
    constructor(private router: Router) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != StoreComponent) {
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }
}