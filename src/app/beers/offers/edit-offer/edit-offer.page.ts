import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Beer } from '@core/interfaces';
import { BeersService } from '@app/services';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage {

  beers$: Observable<Beer[]>;
  beer$: Observable<Beer>;

  constructor(
      private activatedRoute: ActivatedRoute,
      private navCtrl: NavController,
      private beersService: BeersService
  ) { }

  ionViewWillEnter() {
    this.beers$ = this.beersService.getOffers$();

    this.activatedRoute.paramMap.subscribe(paramMap => {
      const beerId = paramMap.get('beerId');
      if (beerId) {
        this.beer$ = this.beersService.getOffers$().pipe(
            map(beers => beers.filter(beer => beer.id === beerId)[0]),
        );
      } else {
        this.navCtrl.navigateBack('/beers/tabs/offers/');
      }
    });
  }

}
