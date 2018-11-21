import { Component, OnInit } from '@angular/core';
import {Heroe} from '../clases/Heroe';
import { HEROES } from '../controlador/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	heroes = HEROES;
	
	heroe: Heroe = {
    	id: 1,
    	nombre: 'Spiderman',
    	apellido: 'Parker',
    	nacionalidad: 'neoyorquino',
    	poder: ''
  	};

	constructor() { }

	ngOnInit() {
	}

}
