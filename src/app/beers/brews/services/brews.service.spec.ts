import { TestBed } from '@angular/core/testing';

import { BrewsService } from './brews.service';

describe('BrewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrewsService = TestBed.get(BrewsService);
    expect(service).toBeTruthy();
  });
});
