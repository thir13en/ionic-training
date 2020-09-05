import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';

import { Beer } from '@core/../../../../shared/models/interfaces';


@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.scss'],
})
export class BeerItemComponent {
  @Input() beer: Beer;

  constructor(private router: Router) { }

  onEdit(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigateByUrl(`beers/tabs/offers/edit/${offerId}`);
  }

}
