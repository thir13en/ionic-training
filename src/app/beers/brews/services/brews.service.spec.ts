import { TestBed } from '@angular/core/testing';

import { BrewsService } from './brews.service';

describe('BrewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [BrewsService],
  }));

  it('should be created', () => {
    const service: BrewsService = TestBed.inject(BrewsService);
    expect(service).toBeTruthy();
  });
});
