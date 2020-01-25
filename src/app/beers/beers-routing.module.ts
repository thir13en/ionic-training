import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeersPage } from './beers.page';

const routes: Routes = [
  {
    path: '',
    component: BeersPage
  },
  {
    path: ':beerId',
    loadChildren: () => import('./beers-detail/beers-detail.module').then( m => m.BeersDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeersPageRoutingModule {}
