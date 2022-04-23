import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PelisPageRoutingModule } from './pelis-routing.module';

import { PelisPage } from './pelis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PelisPageRoutingModule
  ],
  declarations: [PelisPage]
})
export class PelisPageModule {}
