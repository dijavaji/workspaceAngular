import { Component, OnInit, } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {MultiplicarAction, DividirAction} from '../contador.actions';

@Component({
  selector: 'tec-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
	contador:number;
	//@Input()  contador:number;
	//@Output() cambioContador= new EventEmitter<number>();
	constructor(private store:Store<AppState>) { }


	ngOnInit() {
		this.store.select('contador').subscribe(contador =>{
			this.contador = contador;
			console.log(contador);
		}); 
	}

	multiplicar(){
		const accion = new MultiplicarAction(5);
		this.store.dispatch(accion);
		//this.contador*=2; cabio la logica se hace en el reducer
		//this.cambioContador.emit(this.contador);
	}

	dividir(){
		const accion = new DividirAction(5);
		this.store.dispatch(accion);
		//this.contador/=2;
		//this.cambioContador.emit(this.contador);
	}

	resetNieto(nuevoContador){
		this.contador = nuevoContador;
		//this.cambioContador.emit(this.contador);
	}

}
