//import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {ResetAction} from '../contador.actions';

@Component({
  selector: 'tec-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

	contador:number;
	//@Input()  contador:number;
	//@Output() contadorCambio = new EventEmitter<number>();

	constructor(private store:Store<AppState>) { }

	ngOnInit() {
		this.store.select('contador').subscribe(contador =>this.contador = contador);
	}

	reset(){
		const accion = new ResetAction();
		this.store.dispatch(accion);
		
		//this.contador=0;
		//this.contadorCambio.emit(0);
	}
}
