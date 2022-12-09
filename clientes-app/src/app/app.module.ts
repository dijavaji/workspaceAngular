import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';  
import localeES from '@angular/common/locales/es'; 

import { AppComponent } from './app.component';
import { TecHeaderComponent } from './templates/tec-header/tec-header.component';
import { TecFooterComponent } from './templates/tec-footer/tec-footer.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClienteFormComponent } from './pages/clientes/cliente-form/cliente-form.component';

//servicios
import { ClienteService } from './services/cliente.service';

registerLocaleData(localeES,'es'); //registro global de internacionalizacion

const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  //{path: 'directivas', component:DirectivaComponent},
  {path: 'clientes', component:ClientesComponent},
  {path: 'clientes/form', component:ClienteFormComponent},
  {path: 'clientes/form/:id', component:ClienteFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TecHeaderComponent,
    TecFooterComponent,
    ClientesComponent,
    ClienteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ClienteService, {provide: LOCALE_ID, useValue:'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
 