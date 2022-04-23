import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PersonajesModule } from '@personajes/personajes.module';
import { PersonajeComponent } from '@personajes/personaje/personaje.component';


@NgModule({
  declarations: [HomeComponent,PersonajeComponent],
  imports: [CommonModule],
  exports:[HomeComponent,PersonajeComponent]
})
export class HomeModule { }
