import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonajeListaComponent } from './personaje-lista.component';

const routes: Routes = [{ path: '', component: PersonajeListaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajeListaRoutingModule { }
