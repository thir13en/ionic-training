import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Beer } from '@core/../../shared/models/interfaces';
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
    this.beersService.fetchOffers().subscribe();
  }

}
