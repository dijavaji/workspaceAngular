import { Injectable } from '@angular/core';
import {CLIENTES} from '../pages/clientes/clientes.json';
import {Cliente} from '../modelo/cliente';
import {of, Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

	private urlEndPoint: string = "http://localhost:8080/api/clientes";
	private httpHeaders = new HttpHeaders({'Content-type': 'application/json'}); 

	constructor(private http:HttpClient) { }

	getClientes(): Observable <Cliente[]> {
		//return of (CLIENTES);
		//return this.http.get<Cliente[]>(this.urlEndPoint);	misma forma 
		return this.http.get(this.urlEndPoint).pipe(
			map(response => response as Cliente[])
			//map(function (response) { return response as Cliente[]})	//forma ecmasc6 
			);
	}

	creaCliente(cliente: Cliente):Observable <Cliente>{
		return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
	}

	getCliente(id): Observable<Cliente>{
    	return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }

  actualizarCliente(cliente: Cliente): Observable<Cliente>{
  	return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders})
  }

  eliminarCliente(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
