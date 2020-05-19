import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrewsPage } from './brews.page';

const routes: Routes = [
  {
    path: '',
    component: BrewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrewsPageRoutingModule {}
