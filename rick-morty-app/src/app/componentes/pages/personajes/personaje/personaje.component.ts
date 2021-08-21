import { Component, OnInit, Input, ChangeDetectionStrategy  } from '@angular/core';
import {Personaje} from '@shared/modelo/personaje'


@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.sass']
})
export class PersonajeComponent implements OnInit {
	@Input() personaje:Personaje; 
	constructor() { }

	ngOnInit() {
	}

}
