import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestingModule } from '@testing/testing.module';
import { NewOfferPage } from './new-offer.page';


describe('NewOfferPage', () => {
  let component: NewOfferPage;
  let fixture: ComponentFixture<NewOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          TestingModule,
          IonicModule.forRoot(),
      ],
      declarations: [NewOfferPage],
    }).compileComponents();

    fixture = TestBed.createComponent(NewOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
