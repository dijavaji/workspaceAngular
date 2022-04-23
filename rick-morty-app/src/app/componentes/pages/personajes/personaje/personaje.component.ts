
import { Component, OnInit, Input, ChangeDetectionStrategy  } from '@angular/core';
import {Personaje} from '@shared/modelo/personaje'
import { Observable } from "rxjs";

import { PersonajeService } from '@shared/servicios/personaje.service';


@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.sass']
})
export class PersonajeComponent implements OnInit {
	//personajes:Personaje [] = [];
	personajes: Observable<Personaje[]>
	 
	constructor(private servicioPersonaje : PersonajeService) { }

	ngOnInit(): void {
		this.reloadData();
		//this.servicioPersonaje.getPersonajes().then(personajes => this.personajes = personajes.slice(1, 5));
  }

  reloadData() {
    this.personajes = this.servicioPersonaje.getPersonajes();
  }

}
