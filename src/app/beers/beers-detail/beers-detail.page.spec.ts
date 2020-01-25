import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeersDetailPage } from './beers-detail.page';

describe('BeersDetailPage', () => {
  let component: BeersDetailPage;
  let fixture: ComponentFixture<BeersDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeersDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
