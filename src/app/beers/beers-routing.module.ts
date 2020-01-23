import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeersPage } from './beers.page';

const routes: Routes = [
  {
    path: '',
    component: BeersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeersPageRoutingModule {}
