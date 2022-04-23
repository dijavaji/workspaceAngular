import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapaComponent } from  './pages/mapa/mapa.component';
import { UbicacionComponent } from  './pages/ubicacion/ubicacion.component';
import { RastreoComponent } from  './pages/rastreo/rastreo.component';


const routes: Routes = [
	//aqui agregamos las rutas
	{ 
		path: "mapa", component: MapaComponent
	},
  { 
  	path: "contacto", component: MapaComponent
  },
  { 
    path: "ubicacion", component: UbicacionComponent
  },
  { 
    path: "rastreo", component: RastreoComponent
  },	
  { path: "**", redirectTo: "/mapa" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
