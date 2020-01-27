import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Beer } from '@core/interfaces';
import { BeersService } from '@app/services';


@Component({
  selector: 'app-beers-detail',
  templateUrl: './beers-detail.page.html',
  styleUrls: ['./beers-detail.page.scss'],
})
export class BeersDetailPage implements OnInit {
  beer: Beer;

  constructor(
    private route: ActivatedRoute,
    private beersService: BeersService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('beerId')) {
        const beerId: string = paramMap.get('beerId');
        this.beer = this.beersService.getBeer(beerId);
        console.log(this.beer);
      }
    });
  }

}
