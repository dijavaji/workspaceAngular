import { Component, OnInit } from '@angular/core';
import {Heroe} from '../clases/Heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	
	heroe: Heroe = {
    id: 1,
    nombre: 'Spiderman',
    nacionalidad:'neyorquino'
  	};

	constructor() { }

	ngOnInit() {
	}

}
