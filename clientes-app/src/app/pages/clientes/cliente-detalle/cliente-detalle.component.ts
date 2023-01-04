import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Cliente} from '../../../modelo/cliente';
import {ClienteService} from '../../../services/cliente.service';

@Component({
  selector: 'tec-cliente-detalle',
  templateUrl: './cliente-detalle.component.html',
  styleUrls: ['./cliente-detalle.component.css']
})
export class ClienteDetalleComponent implements OnInit {

	cliente: Cliente;
  	titulo: string = "Detalle del cliente";

	constructor(private clienteService: ClienteService, private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.paramMap.subscribe(params => {
	  let id: number = +params.get('id');
	  if (id) {
	    this.clienteService.getCliente(id).subscribe(cliente => {
	      this.cliente = cliente;
	    });
	  }
	}); 
	}

	uploadImage(arvhibo FIle)

}
