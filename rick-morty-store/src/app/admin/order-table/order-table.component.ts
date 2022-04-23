import { Component, OnInit } from '@angular/core';
import {Order} from '../../model/order';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {

	includeShipped = false;
	lstOrdenes: Order[] = [];
    constructor(private repository: OrderService) {}
    
    ngOnInit() {
    	this.getOrders();
	}

    getOrders(): Order[] {
        //return this.repository.getOrders().filter(o => this.includeShipped || !o.shipped);
        this.repository.getOrders().subscribe(res => { this.lstOrdenes = res;}, err => {console.error(err);});;
        return this.lstOrdenes.filter(o => this.includeShipped || !o.shipped);
    }
    
    markShipped(order: Order) {
        order.shipped = true;
        console.log("actualizo oreden "+JSON.stringify(order));
        this.repository.updateOrder(order);
    }

    delete(id: number) {
    	console.log("elimina orden "+ id);
        this.repository.deleteOrder(id);
    }

}
