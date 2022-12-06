import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TecHeaderComponent } from './templates/tec-header/tec-header.component';
import { TecFooterComponent } from './templates/tec-footer/tec-footer.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClienteFormComponent } from './pages/clientes/cliente-form/cliente-form.component';

//servicios
import { ClienteService } from './services/cliente.service';


const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  //{path: 'directivas', component:DirectivaComponent},
  {path: 'clientes', component:ClientesComponent},
  {path: 'clientes/form', component:ClienteFormComponent},
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
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 