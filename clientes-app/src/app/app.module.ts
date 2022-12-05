import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TecHeaderComponent } from './templates/tec-header/tec-header.component';
import { TecFooterComponent } from './templates/tec-footer/tec-footer.component';
import { ClientesComponent } from './pages/clientes/clientes.component';


//servicios
import { ClienteService } from './services/cliente.service';

const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  //{path: 'directivas', component:DirectivaComponent},
  {path: 'clientes', component:ClientesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TecHeaderComponent,
    TecFooterComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 