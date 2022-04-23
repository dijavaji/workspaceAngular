import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliDetallePageRoutingModule } from './peli-detalle-routing.module';

import { PeliDetallePage } from './peli-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliDetallePageRoutingModule
  ],
  declarations: [PeliDetallePage]
})
export class PeliDetallePageModule {}
