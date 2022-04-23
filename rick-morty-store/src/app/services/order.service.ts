import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map ,catchError} from "rxjs/operators";
import { environment } from '../../environments/environment';
import {Order} from '../model/order';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

	readonly URL_SRV_BASE = environment.baseUrl;
    auth_token: string;
    private loaded: boolean = false;
    private orders: Order[] = [];

	constructor(private http: HttpClient) { 

	}

	 loadOrders() {
        this.loaded = true;
        this.getOrders().subscribe(orders => this.orders = orders);
    }

	getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(this.URL_SRV_BASE + "/carts", this.getOptions());
    }
    
    deleteOrder(id: number): Observable<Order> {
        return this.http.delete<Order>(`${this.URL_SRV_BASE}/carts/${id}`,this.getOptions());
    }

    updateOrder(order: Order): Observable<Order> {
        return this.http.put<Order>(`${this.URL_SRV_BASE}/carts/${order.id}`,this.getOptions());
    }

    private getOptions() {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer<${this.auth_token}>`
            })
        }
    }


}
