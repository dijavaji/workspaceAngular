import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { formatDate, DatePipe } from '@angular/common';
import {of, Observable, throwError} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import swal from 'sweetalert2';

import {CLIENTES} from '../pages/clientes/clientes.json';
import {Cliente} from '../modelo/cliente';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {

	private urlEndPoint: string = "http://localhost:8080/api/clientes";
	private httpHeaders = new HttpHeaders({'Content-type': 'application/json'}); 

	constructor(private http:HttpClient, private router: Router) { }

	getClientes(page: number): Observable <any> {
		//return of (CLIENTES);
		//return this.http.get<Cliente[]>(this.urlEndPoint);	misma forma 
		return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
			// tap(response =>{
			// 	let clientes = response as Cliente[];
			// 	console.log('clienteService tap 1');
			// 	clientes.forEach(cliente => { console.log(cliente.nombre);});
			// 	}),
			tap((response : any) =>{
				//let clientes = response as Cliente[];
				console.log('clienteService tap 1');
				(response.content as Cliente[]).forEach(cliente => { console.log(cliente.nombre);});
				}),

			map((response: any) => {
					(response.content as Cliente[]).map(cliente => {
						cliente.nombre = cliente.nombre.toUpperCase();
						//let datePipe = new DatePipe('es'); comentado se formatea desde la vista
						//cliente.createAt = datePipe.transform(cliente.createAt,'dd/MM/yyyy');//datePipe.transform(cliente.createAt,'EEEE dd, MMMM yyyy'); //formatDate(cliente.createAt, 'dd-MM-yyyy', 'en-US'); otra forma
						return cliente;
					});
					return response;
				}),		//map(function (response) { return response as Cliente[]})	//forma ecmasc6
			 tap( response =>{
			 	console.log("ClienteService tap 2");
			 	(response.content as Cliente[]).forEach(cliente =>{
			 		console.log(cliente.nombre);
			 });
			})
			);
	}

	creaCliente(cliente: Cliente):Observable <Cliente>{
		return this.http.post(this.urlEndPoint, cliente, { headers: this.httpHeaders }).pipe(
		map((response: any) => response.cliente as Cliente),
		catchError(e => {

			if(e.status == 400){
				return throwError(e);				
			}
			console.log("se crea exeption");
			console.error(e.error.mensaje);
			swal(e.error.mensaje, e.error.error, 'error');
			return throwError(e);
		})
		);
	}

	getCliente(id): Observable<Cliente>{
		//return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`); cambio para tomar errores backend
		return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      		catchError(e => {
	        	this.router.navigate(['/clientes']);
		        console.error(e.error.mensaje);
		        swal('Error al editar', e.error.mensaje, 'error');
		        return throwError(e);
	      	})
    	);
	}

  actualizarCliente(cliente: Cliente): Observable<any>{
  	//return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders})
  	 return this.http.put<any>(`${this.urlEndPoint}/${cliente.id}`, cliente, { headers: this.httpHeaders }).pipe(
      catchError(e => {

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  eliminarCliente(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }
}
