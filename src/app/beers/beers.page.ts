import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Beer } from '@core/interfaces';
import { BeersService } from '../services';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.page.html',
  styleUrls: ['./beers.page.scss'],
})
export class BeersPage {
  beers$: Observable<Beer[]>;

  constructor(private beersService: BeersService) { }

  // ionic lifecycle hook
  ionViewWillEnter(): void {
    this.beers$ = this.beersService.getBeers$();
  }

}
