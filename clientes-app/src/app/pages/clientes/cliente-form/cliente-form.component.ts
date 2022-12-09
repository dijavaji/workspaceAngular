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
  private errores: string[];

	constructor(private clienteService: ClienteService, private router:Router, 
					private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.cargarCliente();
	}

	public crearCliente(): void{
		//console.log("crear click");
		//console.log(this.cliente);
		this.clienteService.creaCliente(this.cliente).subscribe(cliente => {
        this.router.navigate(['/clientes']);
        swal('Cliente nuevo', `El cliente ${cliente.nombre} creado correctamente.`, 'success');
      },
      err =>{
        this.errores = err.error.errors as string[];
        console.error('codigo de error desde el backend ' + err.status);
        console.error(err.error.errors);
      }
      );

	}

	actualizarCliente(): void{
		this.clienteService.actualizarCliente(this.cliente).subscribe( json => {
      		this.router.navigate(['/clientes'])
          //console.log(cliente);
      		swal('Cliente actualizado', `${json.mensaje}: ${json.cliente.nombre}`, 'success')
    		},
        err =>{
        this.errores = err.error.errors as string[];
        console.error('codigo de error desde el backend ' + err.status);
        console.error(err.error.errors);
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
