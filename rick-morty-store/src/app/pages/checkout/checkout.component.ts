import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Order} from "../../model/order"
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

	orderSent: boolean = false;
    submitted: boolean = false;

	constructor(public order: Order, public repository:ProductService) { }

	ngOnInit() {
	}

	submitOrder(form: NgForm) {
		this.submitted = true;
        if (form.valid) {
        	//this.order.user
            this.repository.saveOrder(this.order).subscribe(order => {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }

}
