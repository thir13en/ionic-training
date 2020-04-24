import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscoverPageRoutingModule } from './discover-routing.module';
import { BeersSharedModule } from '../beers-shared/beers-shared.module';

import { DiscoverPage } from './discover.page';
import { ModalExampleComponent } from './modal-example/modal-example.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverPageRoutingModule,
    BeersSharedModule,
  ],
  declarations: [
    DiscoverPage,
    ModalExampleComponent,
  ],
  entryComponents: [ModalExampleComponent],
})
export class DiscoverPageModule {}
