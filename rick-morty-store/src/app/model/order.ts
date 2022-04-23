
import { Injectable } from "@angular/core";
import { Cart } from "./cart";
import { User } from "./user";

@Injectable()
export class Order {

	public id?: number;
    //public user?: User;
    public shipped?: boolean = false;
    public user: User;

    constructor(public cart: Cart) { 
    	this.user = new User();
    }
    clear() {
        this.id = null;
        //this.name = this.address = this.city = null;
        //this.state = this.zip = this.country = null;
        this.user = null;
        this.shipped = false;
        this.cart.clear();
    }
}
