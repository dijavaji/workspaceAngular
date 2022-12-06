import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Cliente } from '../../../modelo/cliente';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

	private cliente:Cliente = new Cliente();

	private titulo: string = "Crear cliente";

	constructor(private clienteService: ClienteService, private router:Router) { }

	ngOnInit() {
	}

	public crear(): void{
		console.log("crear click");
		console.log(this.cliente);
		this.clienteService.creaCliente(this.cliente).subscribe(
			response => this.router.navigate(['/clientes'])
			);

	}

	actualizar(): void{

	}

}
