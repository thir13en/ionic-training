import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeersDetailPage } from './beers-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BeersDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeersDetailPageRoutingModule {}
