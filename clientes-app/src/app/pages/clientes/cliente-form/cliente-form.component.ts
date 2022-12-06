import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2'

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

	constructor(private clienteService: ClienteService, private router:Router, 
					private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.cargarCliente();
	}

	public crearCliente(): void{
		console.log("crear click");
		console.log(this.cliente);
		this.clienteService.creaCliente(this.cliente).subscribe(cliente => {
        this.router.navigate(['/clientes']);
        swal('Cliente nuevo', `Cliente ${cliente.nombre} creado correctamente.`, 'success');
      }
      );

	}

	actualizarCliente(): void{
		this.clienteService.actualizarCliente(this.cliente).subscribe( cliente => {
      		this.router.navigate(['/clientes'])
      		swal('Cliente actualizado', `Cliente ${cliente.nombre} actualizado correctamente.`, 'success')
    		}
    	)
	}

	cargarCliente(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente)
      }
    })
  }

}
