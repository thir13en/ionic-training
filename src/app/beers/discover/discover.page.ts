import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

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
      // private menuCtrl: MenuController,
  ) { }

  // ionic lifecycle hook
  ionViewWillEnter(): void {
    this.beers$ = this.beersService.getBeers$();
  }

  // example of how to open a menu programmatically
  private openMenu(): void {
    // this.menuCtrl.open();
  }

}
