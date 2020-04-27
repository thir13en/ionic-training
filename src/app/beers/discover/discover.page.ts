import { Component } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';

import { Observable } from 'rxjs';

import { Beer } from '@core/interfaces';
import { BeersService } from '@app/services';
import { ModalExampleComponent } from './modal-example/modal-example.component';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage {

  beers$: Observable<Beer[]>;

  constructor(
      private beersService: BeersService,
      private modalCtr: ModalController,
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

  private openModal(): void {
    this.modalCtr
        .create({
          component: ModalExampleComponent,
          // passing information to a modal
          componentProps: {
            dataInput: 'This is the data passed to the modals',
          }
        })
        .then(modalEl => {
            modalEl.present();
            // necessary for retrieving data
            return modalEl.onDidDismiss();
        })
        // retrieving the close modal data
        .then(resultData => console.log(resultData.data, resultData.role));
  }

}
