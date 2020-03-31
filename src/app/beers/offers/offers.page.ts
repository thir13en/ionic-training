import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Beer } from '@core/interfaces';
import { BeersService } from '@app/services';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage {

  beers$: Observable<Beer[]>;

  constructor(private beersService: BeersService) { }

  ionViewWillEnter() {
    this.beers$ = this.beersService.getOffers$();
  }

}
