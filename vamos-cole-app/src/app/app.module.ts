import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreaUsuarioComponent } from './componentes/usuario/crea-usuario/crea-usuario.component';
import { UsuarioDetalleComponent } from './componentes/usuario/usuario-detalle/usuario-detalle.component';
import { UsuarioListaComponent } from './componentes/usuario/usuario-lista/usuario-lista.component';

// Importar rutas
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
//import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TechHeaderComponent } from './template/tech-header/tech-header.component';
import { TechComponentComponent } from './template/tech-component/tech-component.component';
import { TechSidebarComponent } from './template/tech-sidebar/tech-sidebar.component';
import { TechFooterComponent } from './template/tech-footer/tech-footer.component';
// Importar ReactiveFormsModule para los formularios
//import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CreaUsuarioComponent,
    UsuarioDetalleComponent,
    UsuarioListaComponent,
    TechHeaderComponent,
    TechComponentComponent,
    TechSidebarComponent,
    TechFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule
    //ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
