import { NgModule } from '@angular/core';

import { BeerItemComponent } from './components/beer-item/beer-item.component';


@NgModule({
  declarations: [BeerItemComponent],
  exports: [BeerItemComponent],
})
export class BeersSharedModule { }
