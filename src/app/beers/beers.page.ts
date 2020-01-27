import { Component, OnInit } from '@angular/core';

import { Beer } from '@core/interfaces';
import { BeersService } from '../services';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.page.html',
  styleUrls: ['./beers.page.scss'],
})
export class BeersPage implements OnInit {
  beers: Beer[];

  constructor(private beersService: BeersService) { }

  ngOnInit() {
    this.beers = this.beersService.getBeers();
  }

}
