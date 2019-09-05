import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechFooterComponent } from './template/tech-footer/tech-footer.component';
import { TechHeaderComponent } from './template/tech-header/tech-header.component';
import { TechLayoutComponent } from './template/tech-layout/tech-layout.component';
import { TechSidebarComponent } from './template/tech-sidebar/tech-sidebar.component';
import { UsuarioListaComponent } from './pages/usuario-lista/usuario-lista.component';
import { UsuarioDetalleComponent } from './pages/usuario-detalle/usuario-detalle.component';
import { UsuarioCreaComponent } from './pages/usuario-crea/usuario-crea.component';
import { UsuarioService } from './servicios/usuario.service';


@NgModule({
  declarations: [
    AppComponent,
    TechFooterComponent,
    TechHeaderComponent,
    TechLayoutComponent,
    TechSidebarComponent,
    UsuarioListaComponent,
    UsuarioDetalleComponent,
    UsuarioCreaComponent
  ],
  imports: [ BrowserModule, FormsModule,AppRoutingModule, HttpClientModule ],
  exports: [TechLayoutComponent],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
