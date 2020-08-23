import { TestBed } from '@angular/core/testing';

import { TestingModule } from '@testing/testing.module';
import { BeersService } from './beers.service';


describe('BeersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [TestingModule],
  }));

  it('should be created', () => {
    const service: BeersService = TestBed.inject(BeersService);
    expect(service).toBeTruthy();
  });

});
