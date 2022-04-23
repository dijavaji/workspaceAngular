import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajeListaRoutingModule } from './personaje-lista-routing.module';
import { PersonajeListaComponent } from '@personajes/personaje-lista/personaje-lista.component';

@NgModule({
  declarations: [PersonajeListaComponent],
  imports: [CommonModule, PersonajeListaRoutingModule]
})
export class PersonajeListaModule { }
