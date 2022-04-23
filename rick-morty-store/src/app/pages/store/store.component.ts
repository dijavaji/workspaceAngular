import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from "../../model/product";
import { ProductService } from "../../services/product.service";
import { Cart } from "../../model/cart";
import {CartSummaryComponent} from "../cart-summary/cart-summary.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
	productos : Product[] = [];
	categorias: string[] = [];
	public selectedCategory = null;
	public productsPerPage = 4;
    public selectedPage = 1;
    //private carro:Cart;

	constructor(private productoServicio:ProductService, private carro: Cart, private router: Router) { 
		//this.carro=new Cart();
	}

	ngOnInit() {
	 this.getProducts();
	 this.reloadData();
	}

	getProducts(categoria:string=null): Product[] {
		if(categoria == null){ 
			this.productoServicio.getProducts(this.selectedCategory).subscribe(res => { this.productos = res;}, err => {console.error(err);}); 
		}else{
	  		this.productoServicio.getProductCategory(this.selectedCategory).subscribe(res => { this.productos = res;}, err => {console.error(err);});
		}
		console.log("-----"+this.productos.length);
		let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
		//this.productos = 
		//console.log("despues slice"+this.productos.length);
		return this.productos.slice(pageIndex, pageIndex + this.productsPerPage);
	}

	reloadData() {

		this.productoServicio.getCategories().subscribe(res => { this.categorias = res;}, err => {console.error(err);})
	}


	changeCategory(newCategory?: string) {
		console.log(newCategory);
		this.selectedCategory = newCategory;
		this.getProducts(this.selectedCategory);
	}

	addProductToCart(producto: Product) {
		console.log("agrego producto"+producto.id);
        this.carro.addLine(producto);
        this.router.navigateByUrl("/cart");
    }

	/*changePage(newPage: number) {
        this.selectedPage = newPage;
    }
    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }
    get pageNumbers(): number[] {
        return Array(Math.ceil(this.productos.length / this.productsPerPage))
                .fill(0).map((x, i) => i + 1);
    }*/	
}
