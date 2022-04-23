import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PelisPage } from './pelis.page';

const routes: Routes = [
  {
    path: '',
    component: PelisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PelisPageRoutingModule {}
