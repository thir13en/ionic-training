import { TestBed, async, inject } from '@angular/core/testing';

import { TestingModule } from '@testing/testing.module';
import { AuthGuard } from './auth.guard';


describe('AuthGuard', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
    });
  }));

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

});
