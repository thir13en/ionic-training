import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditOfferPage } from './edit-offer.page';
import { TestingModule } from '@testing/testing.module';

describe('EditOfferPage', () => {
  let component: EditOfferPage;
  let fixture: ComponentFixture<EditOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule,
        IonicModule.forRoot(),
      ],
      declarations: [EditOfferPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
