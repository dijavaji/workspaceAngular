import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'tec-paginator-nav',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges{

	@Input() paginado: any;	//inyectamos de componente padre a hijo

	paginas: number[];
	desde: number;		//rangos de paginacion
	hasta: number;

	constructor() { }

	ngOnInit() {
		this.initPaginator(); //para cuando se inicializa el componente en la primera pag	
	}

	ngOnChanges(changes: SimpleChanges){	//se recalcula cada vez que cambia el paginador
		//con changes obtenemos los cambios del objeto padre
		let paginadoActualizado = changes['paginado'];
		if(paginadoActualizado.previousValue){	//solamente si un estado anterior haya cambiado invocamos
			this.initPaginator();
		}
		
	}

	private initPaginator(): void{
		this.desde = Math.min(Math.max(1, this.paginado.number-4), this.paginado.totalPages-5);

		this.hasta= Math.max(Math.min(this.paginado.totalPages, this.paginado.number+4),6);

		if(this.paginado.totalPages>5){
			this.paginas = new Array(this.hasta - this.desde + 1).fill(0).map((_valor, indice) => indice + this.desde);
		}else{
			this.paginas = new Array(this.paginado.totalPages).fill(0).map((_valor, indice) => indice +1);	//agrego +1 para que comiense desde 1
		}
	}

}
