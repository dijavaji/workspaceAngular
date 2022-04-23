import { Component, OnInit } from '@angular/core';


import {Router, ActivatedRoute } from "@angular/router";
import {NgForm } from "@angular/forms";
import {Product } from "../../model/product";
import {ProductService} from  "../../services/product.service";

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {
	editing: boolean = false;
    product: Product = {};

	constructor(private repository: ProductService,private router: Router,activeRoute: ActivatedRoute) { 
		this.editing = activeRoute.snapshot.params["mode"] == "edit";
        if (this.editing) {
            //Object.assign(this.product,repository.getProduct(activeRoute.snapshot.params["id"]));
            repository.getProduct(activeRoute.snapshot.params["id"]).subscribe(res => { this.product = res;}, err => {console.error(err);});;
            console.log("producto editar"+JSON.stringify(this.product));
        }
	}

	save(form: NgForm) {
        this.repository.saveProduct(this.product);
        this.router.navigateByUrl("/admin/main/products");
    }

	ngOnInit() {
	}

}
