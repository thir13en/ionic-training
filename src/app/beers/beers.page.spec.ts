import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeersPage } from './beers.page';

describe('BeersPage', () => {
  let component: BeersPage;
  let fixture: ComponentFixture<BeersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
