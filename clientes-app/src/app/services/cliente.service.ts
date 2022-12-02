import { Injectable } from '@angular/core';
import {CLIENTES} from '../pages/clientes/clientes.json';
import {Cliente} from '../modelo/cliente';
import {of, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Observable <Cliente[]> {return of (CLIENTES);}
}
