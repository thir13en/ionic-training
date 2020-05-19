import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrewsPage } from './brews.page';

describe('BrewsPage', () => {
  let component: BrewsPage;
  let fixture: ComponentFixture<BrewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
