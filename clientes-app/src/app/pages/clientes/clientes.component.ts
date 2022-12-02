import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../modelo/cliente';
import {ClienteService} from '../../services/cliente.service';


@Component({
  selector: 'tec-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

	public clientes: Cliente[];
	constructor(private clienteService: ClienteService) { 

	}

	ngOnInit() {
		this.clienteService.getClientes().subscribe(
			clientes => this.clientes = clientes
			);
	}

}
