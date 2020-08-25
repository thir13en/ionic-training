import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiscoverPage } from './discover.page';
import { TestingModule } from '@testing/testing.module';

describe('DiscoverPage', () => {
  let component: DiscoverPage;
  let fixture: ComponentFixture<DiscoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule,
        IonicModule,
      ],
      declarations: [DiscoverPage]
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
