import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';

import { Beer } from '@core/interfaces';


@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.scss'],
})
export class BeerItemComponent implements OnInit {
  @Input() beer: Beer;

  constructor(private router: Router) { }

  ngOnInit() {}

  onEdit(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['beers', 'tabs', 'offers', 'edit', offerId]);
  }

}
