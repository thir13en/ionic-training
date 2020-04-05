import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffersPageRoutingModule } from './offers-routing.module';
import { BeersSharedModule } from '../beers-shared/beers-shared.module';

import { OffersPage } from './offers.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffersPageRoutingModule,
    BeersSharedModule,
  ],
  declarations: [OffersPage]
})
export class OffersPageModule {}
