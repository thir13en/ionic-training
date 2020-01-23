import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeersPageRoutingModule } from './beers-routing.module';

import { BeersPage } from './beers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeersPageRoutingModule
  ],
  declarations: [BeersPage]
})
export class BeersPageModule {}
