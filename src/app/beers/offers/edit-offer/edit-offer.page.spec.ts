import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { EMPTY, of } from 'rxjs';

import { BeersService } from '@app/services';
import { TestingModule } from '@testing/testing.module';
import { NoopComponent } from '@testing/mocks';
import { EditOfferPage } from './edit-offer.page';


fdescribe('EditOfferPage', () => {
  let component: EditOfferPage;
  let fixture: ComponentFixture<EditOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule,
        RouterTestingModule.withRoutes([
          { path: 'beers/tabs/offers/', component: NoopComponent }
        ]),
        IonicModule.forRoot(),
      ],
      declarations: [EditOfferPage],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
