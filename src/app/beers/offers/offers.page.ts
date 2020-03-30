import { Component, OnInit } from '@angular/core';

import { BeersService } from '@app/services';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  constructor(private beersService: BeersService) { }

  ngOnInit() {
    this.beersService.getOffers$().subscribe(console.log);
  }

}
