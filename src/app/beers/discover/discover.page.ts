import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '@core/interfaces';
import { BeersService } from '@app/services';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage {

  beers$: Observable<Beer[]>;

  constructor(
      private beersService: BeersService,
  ) { }

  // ionic lifecycle hook
  ionViewWillEnter(): void {
    this.beers$ = this.beersService.getBeers$();
  }

}
