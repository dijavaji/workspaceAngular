import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './componentes/pages/home/home.module';

import { PersonajeListaComponent } from './componentes/pages/personajes/personaje-lista/personaje-lista.component';
import { PersonajeDetalleModule } from './componentes/pages/personajes/personaje-detalle/personaje-detalle.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: './componentes/pages/home/home.module#HomeModule'
  },

  /*{
    path: 'personaje-lista',
    loadChildren: './componentes/pages/personajes/personaje-lista/personaje-lista.module#PersonajeListaComponent'
  },*/
  {
    path: 'personaje-detalle/:id',
    loadChildren: './componentes/pages/personajes/personaje-detalle/personaje-detalle.module#PersonajeDetalleModule'
      
  },
];

@NgModule({
  declarations:[],	
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
