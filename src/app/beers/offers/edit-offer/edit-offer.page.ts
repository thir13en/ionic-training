import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Beer } from '@core/interfaces';
import { BeersService } from '@app/services';


@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  // TODO: add path to reach this page
  form: FormGroup;
  beers$: Observable<Beer[]>;
  beer$: Observable<Beer>;

  constructor(
      private activatedRoute: ActivatedRoute,
      private navCtrl: NavController,
      private beersService: BeersService
  ) { }

  ngOnInit() {
    this.beers$ = this.beersService.getOffers$();

    this.activatedRoute.paramMap.subscribe(paramMap => {
      // mock this for test to be successful
      const beerId = paramMap.get('beerId');
      if (beerId) {
        this.beer$ = this.beersService.getOffers$().pipe(
            map(beers => beers.filter(beer => beer.id === beerId)[0]),
        );
        this.beer$.subscribe(beer => {
          this.form = new FormGroup({
            title: new FormControl(beer.name, {
              updateOn: 'blur',
              validators: [Validators.required],
            }),
            description: new FormControl(beer.description, {
              updateOn: 'blur',
              validators: [Validators.required, Validators.maxLength(180)],
            }),
          });
        });
      } else {
        this.navCtrl.navigateBack('/beers/tabs/offers/');
      }
    });
  }

  editOffer() {
    console.log(this.form);
  }
}
