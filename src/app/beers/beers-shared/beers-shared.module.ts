import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { BeerItemComponent } from './components/beer-item/beer-item.component';


@NgModule({
  imports: [IonicModule],
  declarations: [BeerItemComponent],
  exports: [BeerItemComponent],
})
export class BeersSharedModule { }
