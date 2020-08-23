import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestingModule } from '@testing/testing.module';
import { BrewsService } from './services/brews.service';
import { BrewsPage } from './brews.page';


describe('BrewsPage', () => {
  let component: BrewsPage;
  let fixture: ComponentFixture<BrewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule,
        IonicModule.forRoot(),
      ],
      declarations: [BrewsPage],
      providers: [BrewsService],
    }).compileComponents();

    fixture = TestBed.createComponent(BrewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
