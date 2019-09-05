import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListaComponent } from './pages/usuario-lista/usuario-lista.component';
import { UsuarioCreaComponent } from './pages/usuario-crea/usuario-crea.component';

const routes: Routes = [
	{ path: '', redirectTo:'usuarios',  pathMatch: 'full'},
	{ path: 'usuarios', component: UsuarioListaComponent },
	{ path: 'anadir', component: UsuarioCreaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
