import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliService } from '../../services/peli.service';
import { IPelicula } from '../../model/IPelicula.interface';


@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.page.html',
  styleUrls: ['./pelis.page.scss'],
})
export class PelisPage implements OnInit {

	results: Observable<IPelicula>;
	nombre: string = '';
	tipo: string = '';  
  constructor(private peliculaService: PeliService ) { }

  ngOnInit() {
  }

  busquedaChanged():void{
  	this.results = this.peliculaService.buscarPeliculas(this.nombre, this.tipo);
  }

}
