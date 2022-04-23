import { Component, OnInit } from '@angular/core';
import { Cart } from "../../model/cart";

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

	//public cart: Cart;
	constructor(public cart: Cart) { 
		//this.cart = new Cart();
	}

	ngOnInit() {
	}

}
