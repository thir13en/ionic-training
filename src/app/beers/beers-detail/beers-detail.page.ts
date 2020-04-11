import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Beer } from '@core/interfaces';
import { BeersService } from '@app/services';
import { ROUTES } from '@core/routing';
import { AlertController } from '@ionic/angular';


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
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('beerId')) {
        const beerId: string = paramMap.get('beerId') as string;

        this.beer = this.beersService.getBeer(beerId);
      } else {
        this.router.navigate([ROUTES.BEERS]);
      }
    });
  }

  deleteBeer(): void {
    this.alertController.create({
      header: 'Are you sure you want to delete?',
      message: 'Once you delete the information will be lost forever...',
      buttons: [{
        text: 'No',
        role: 'cancel',
      }, {
        text: 'Delete',
        handler: (): void => {
          this.beersService.deleteBeer(this.beer.id);
          this.router.navigate([ROUTES.BEERS]);
        }
      }],
    }).then(
        (alertEl: HTMLIonAlertElement): Promise<void> => alertEl.present(),
    );
  }

}
