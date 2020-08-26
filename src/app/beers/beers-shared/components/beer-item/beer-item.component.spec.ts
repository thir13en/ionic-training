import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestingModule } from '@testing/testing.module';
import { BeerItemComponent } from './beer-item.component';
import { MOCK_BEER, NoopComponent } from '@testing/mocks';
import { RouterTestingModule } from '@angular/router/testing';


describe('BeerItemComponent', () => {
  let component: BeerItemComponent;
  let fixture: ComponentFixture<BeerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          TestingModule,
        RouterTestingModule.withRoutes([
          { path: 'beers/tabs/offers/edit/:id', component: NoopComponent }
        ]),
          IonicModule,
      ],
      declarations: [BeerItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BeerItemComponent);
    component = fixture.componentInstance;
    component.beer = MOCK_BEER;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
