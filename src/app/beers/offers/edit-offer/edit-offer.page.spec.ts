import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EMPTY, of } from 'rxjs';

import { TestingModule } from '@testing/testing.module';
import { BeersService } from '@app/services';
import { EditOfferPage } from './edit-offer.page';
import { ActivatedRoute } from '@angular/router';


fdescribe('EditOfferPage', () => {
  let component: EditOfferPage;
  let fixture: ComponentFixture<EditOfferPage>;
  let beersService: BeersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule,
        IonicModule.forRoot(),
      ],
      declarations: [EditOfferPage],
      providers: [{ provide: ActivatedRoute, useValue: { paramMap: of({ get: () => undefined }) } }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOfferPage);
    component = fixture.componentInstance;
    // beersService = TestBed.inject(BeersService);
    // spyOn(beersService, 'getBeers$').and.returnValue(EMPTY);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
