import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeersPageRoutingModule } from './beers-routing.module';

import { BeersPage } from './beers.page';
import { BeerItemComponent } from './beer-item/beer-item.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeersPageRoutingModule
  ],
  declarations: [
    BeersPage,
    BeerItemComponent,
  ]
})
export class BeersPageModule {}
