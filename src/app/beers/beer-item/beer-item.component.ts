import { Component, Input, OnInit } from '@angular/core';

import { Beer } from '@core/interfaces';


@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.scss'],
})
export class BeerItemComponent implements OnInit {
  @Input() beer: Beer;

  constructor() { }

  ngOnInit() {}

}
