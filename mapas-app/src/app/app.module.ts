import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//creo modulo donde importo componentes material
import  { MaterialModule } from './material.module';
//agrego libreria de google maps
import { AgmCoreModule } from '@agm/core';
import { google } from '@google/maps';

import { MapaComponent } from './pages/mapa/mapa.component';
import { MapaEditarComponent } from './pages/mapa/mapa-editar.component';
import { SidenavComponent } from './pages/components/sidenav/sidenav.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
//servicios
import { UbicacionService } from './services/ubicacion.service';
import { RastreoComponent } from './pages/rastreo/rastreo.component';


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent,
    SidenavComponent,
    UbicacionComponent,
    RastreoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      // tomar API key aqui: https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyAJw3aRwecwujWPT8Ev7OrNObIcmrZIzKM'
    })
  ],
  entryComponents:[MapaEditarComponent],
  providers: [UbicacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
