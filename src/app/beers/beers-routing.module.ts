import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeersPage } from './beers.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/discover'
  },
  {
    path: 'tabs',
    component: BeersPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverPageModule),
          },
          {
            path: ':beerId',
            loadChildren: () => import('./beers-detail/beers-detail.module').then( m => m.BeersDetailPageModule)
          },
        ],
      },
      {
        path: 'offers',
        children: [
          {
            path: '',
            loadChildren: () => import('./offers/offers.module').then(m => m.OffersPageModule),
          },
          {
            path: 'new',
            loadChildren: () => import('./offers/new-offer/new-offer.module').then( m => m.NewOfferPageModule)
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeersPageRoutingModule {}
