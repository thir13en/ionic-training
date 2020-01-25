import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeersDetailPageRoutingModule } from './beers-detail-routing.module';

import { BeersDetailPage } from './beers-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeersDetailPageRoutingModule
  ],
  declarations: [BeersDetailPage]
})
export class BeersDetailPageModule {}
