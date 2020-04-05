import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { BeerItemComponent } from './components/beer-item/beer-item.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
      // TODO: facing design error when it comes to routing
      RouterModule,
      IonicModule,
  ],
  declarations: [BeerItemComponent],
  exports: [BeerItemComponent],
})
export class BeersSharedModule { }
