import { Injectable } from '@angular/core';

import { BrewModel } from '@app/brews/models';


@Injectable()
export class BrewsService {
  private pBrews = [
      new BrewModel(
          '1',
          '1',
          ['yeast', 'sugar'],
          'La Linda'
      )
  ];

  get brews(): BrewModel[] {
    return this.pBrews;
  }
}
