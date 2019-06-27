import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreaUsuarioComponent } from './componentes/usuario/crea-usuario/crea-usuario.component';
import { UsuarioDetalleComponent } from './componentes/usuario/usuario-detalle/usuario-detalle.component';
import { UsuarioListaComponent } from './componentes/usuario/usuario-lista/usuario-lista.component';

export const routes: Routes = [
    { path: 'crea-usuario', component: CreaUsuarioComponent },
    { path: 'usuario-detalle', component: UsuarioDetalleComponent },
    { path: 'usuario-lista', component: UsuarioListaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'usuario-lista' },
    { path: '**', pathMatch: 'full', redirectTo: 'usuario-lista' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
 
export class AppRoutingModule { }