import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Beer } from '@core/interfaces';
import { BeersService } from '@app/services';
import { ROUTES } from '@core/routing';


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
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('beerId')) {
        const beerId: string = paramMap.get('beerId') as string;

        this.beer = this.beersService.getBeer(beerId);
        console.log(this.beer);
      }
    });
  }

  deleteBeer(): void {
    this.beersService.deleteBeer(this.beer.id);
    this.router.navigate([ROUTES.BEERS]);
  }

}
