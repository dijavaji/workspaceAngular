import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import { PersonajeListaComponent } from '@personajes/personaje-lista/personaje-lista.component';
//import { CharacterDetailsComponent } from '@personajes/character-details/character-details.component';

import { PersonajeComponent } from './personaje/personaje.component';
//import { CharacterDetailsComponent } from '@personajes/personaje-detalle/personaje-detalle.component';

const myComponents = [
  //CharacterDetailsComponent, 
   PersonajeComponent
];



@NgModule({
  declarations: [PersonajeComponent],
  imports: [CommonModule],
  exports: [PersonajeComponent]
})
export class PersonajesModule { }
