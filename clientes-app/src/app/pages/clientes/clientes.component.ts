import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

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


	eliminarCliente(cliente: Cliente): void {
    swal({
      title: 'Est\u00e1 seguro?',
      text: `¿Desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar!',
      cancelButtonText: 'Cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.clienteService.eliminarCliente(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli !== cliente)
            swal(
              'Cliente eliminado',
              `Cliente ${cliente.nombre} eliminado correctamente.`,
              'success'
            )
          }
        )

      }
    })
  }

}
