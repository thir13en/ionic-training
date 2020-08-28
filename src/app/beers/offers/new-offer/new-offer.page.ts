import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BeersService } from '@app/services';
import { ROUTES } from '@core/routing';


@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  form: FormGroup;

  constructor(
      private router: Router,
      private beersService: BeersService
  ) { }

  ngOnInit() {
    // NOTE: alternative to use a reactive form without the form builder
    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)],
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)],
      }),
      imgUrl: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      homebrewed: new FormControl(false, {
        updateOn: 'blur',
      }),
      dateFrom: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      dateTo: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
    });
  }

  createOffer() {
    this.beersService.addOffer({
      name: this.form.value.name,
      description: this.form.value.description,
      price: +this.form.value.price,
      homebrew: this.form.value.homebrew,
      imageUrl: this.form.value.imgUrl,
    }).subscribe(createdBeer => {
      this.router.navigate([ROUTES.BEERS, ROUTES.TABS, ROUTES.OFFERS]);
    });
  }
}
