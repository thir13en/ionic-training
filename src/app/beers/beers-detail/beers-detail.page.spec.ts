import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { TestingModule } from '@testing/testing.module';
import { ROUTES } from '@core/routing';
import { NoopComponent } from '@testing/mocks';
import { BeersDetailPage } from './beers-detail.page';


describe('BeersDetailPage', () => {
  let component: BeersDetailPage;
  let fixture: ComponentFixture<BeersDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule,
        RouterTestingModule.withRoutes([
          { path: ROUTES.BEERS, component: NoopComponent }
        ]),
        IonicModule,
      ],
      declarations: [BeersDetailPage]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
