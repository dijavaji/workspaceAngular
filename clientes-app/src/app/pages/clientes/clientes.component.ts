import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';    //agrego para ver el cambio del parametro
import swal from 'sweetalert2';
import {tap} from 'rxjs/operators';

import {Cliente} from '../../modelo/cliente';
import {ClienteService} from '../../services/cliente.service';


@Component({
  selector: 'tec-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

	public clientes: Cliente[];
  public paginador: any;

	constructor(private clienteService: ClienteService, private activatedRoute: ActivatedRoute) { 

	}

	ngOnInit() {
    //let page = 0;
    this.activatedRoute.paramMap.subscribe( params =>{
    let page:number = +params.get("page");    //hago un cast a number
    if(!page){
      page=0;
    }  
		this.clienteService.getClientes(page).pipe(
        tap(response=>{ console.log('ClientesComponent tap 3');
           (response.content as Cliente[]).forEach( cliente => {console.log(cliente.nombre);}); 
        })
      ).subscribe( response => {this.clientes = response.content as Cliente[]; this.paginador = response;});
    });
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
