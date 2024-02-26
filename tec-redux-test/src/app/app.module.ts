import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment} from '../environments/environment';

//ngrx
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { contadorReducer} from './contador/contador.reducer';

import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';


@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({contador:contadorReducer}),
     StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
       features: {
        pause: false,
        lock: true,
        persist: true
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
