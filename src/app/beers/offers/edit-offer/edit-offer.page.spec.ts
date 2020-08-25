import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { Observable, of as observableOf } from 'rxjs';

import { TestingModule } from '@testing/testing.module';
import { NoopComponent } from '@testing/mocks';
import { EditOfferPage } from './edit-offer.page';


describe('EditOfferPage', () => {
  let component: EditOfferPage;
  let fixture: ComponentFixture<EditOfferPage>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule,
        RouterTestingModule.withRoutes([
          { path: 'beers/tabs/offers/', component: NoopComponent }
        ]),
        IonicModule,
      ],
      declarations: [EditOfferPage],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOfferPage);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
