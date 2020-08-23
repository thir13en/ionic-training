import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestingModule } from '@testing/testing.module';
import { BeersDetailPage } from './beers-detail.page';


describe('BeersDetailPage', () => {
  let component: BeersDetailPage;
  let fixture: ComponentFixture<BeersDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
        TestingModule,
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
