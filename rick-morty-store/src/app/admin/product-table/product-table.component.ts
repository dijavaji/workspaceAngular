import { Component, OnInit } from '@angular/core';
import {ProductService} from  "../../services/product.service";
import {Product} from "../../model/product"

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {


	private productos: Product[] = [];

	constructor(private repository: ProductService) { }
	
	ngOnInit() {
  		this.getProducts();
  	}

	getProducts(): Product[] {
        this.repository.getProducts("").subscribe(res => { this.productos = res;}, err => {console.error(err);});;
        return this.productos;
    }
    
    deleteProduct(id: number) {
        this.repository.deleteProduct(id).subscribe(res => {alert('Producto eliminado correctamente');},
				err => {
						console.error(err);
						alert('Error al eliminar el producto::' +
						JSON.stringify(err));
					}
			);
    }

}
