import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Product } from "../model/product";
import {Order} from "../model/order";


@Injectable()
export class ProductService {
	readonly URL_SRV_CLIENTE = environment.urlSrvProducto;
    readonly URL_SRV_USER = environment.urlSrvUser;
    auth_token: string;


	private products: Product[] = [];
    

	constructor(private http: HttpClient) { }

	getProducts(category: string = null): Observable<Product[]> {
        //return this.products.filter(p => category == null || category == p.category);
        return this.http.get<Product[]>(`${this.URL_SRV_CLIENTE}/products`);
    }

    getProduct(id: number): Observable<Product> {
        console.log("busca producto "+id);
        //return this.products.find(p => p.id == id);
        return this.http.get<Product>(`${this.URL_SRV_CLIENTE}/products/${id}`);
    }

    getCategories(): Observable <any> {
        return this.http.get(`${this.URL_SRV_CLIENTE}/products/categories`);
        //return this.categories;
    }

    getProductCategory(categoria: string): Observable <any> {
        return this.http.get(`${this.URL_SRV_CLIENTE}/category/${categoria}`);
        //return this.categories;
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        this.http.post(this.URL_SRV_USER, order.user);
        return from([order]);
    }


    saveProduct(producto: Product): Observable<Product> {
        return this.http.put<Product>(this.URL_SRV_CLIENTE + "/products",producto, this.getOptions());
    }

    updateProduct(product): Observable<Product> {
        return this.http.put<Product>(`${this.URL_SRV_CLIENTE}/products/${product.id}`,
            product, this.getOptions());
    }
    deleteProduct(id: number): Observable<Product> {
        console.log("eliminar producto "+id);
        return this.http.delete<Product>(`${this.URL_SRV_CLIENTE}/products/${id}`);
    }

    private getOptions() {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer<${this.auth_token}>`
            })
        }
    }
  
}
