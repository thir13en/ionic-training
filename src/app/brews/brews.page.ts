import { Component, OnInit } from '@angular/core';

import { BrewsService } from './services/brews.service';
import { BrewModel } from './models';


@Component({
  selector: 'app-brews',
  templateUrl: './brews.page.html',
  styleUrls: ['./brews.page.scss'],
})
export class BrewsPage implements OnInit {
  loadedBrews: BrewModel[];

  constructor(private brewsService: BrewsService) { }

  ngOnInit() {
    this.loadedBrews = this.brewsService.brews;
  }

}
