import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'tec-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

	@Input()  contador:number;
	@Output() contadorCambio = new EventEmitter<number>();



	constructor() { }

	ngOnInit() {
	}

	reset(){
		this.contador=0;
		this.contadorCambio.emit(0);
	}
}
