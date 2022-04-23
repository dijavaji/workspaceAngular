import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliDetallePage } from './peli-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: PeliDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliDetallePageRoutingModule {}
