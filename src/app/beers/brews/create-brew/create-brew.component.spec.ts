import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateBrewComponent } from './create-brew.component';
import { TestingModule } from '@testing/testing.module';

describe('CreateBrewComponent', () => {
  let component: CreateBrewComponent;
  let fixture: ComponentFixture<CreateBrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule, IonicModule],
      declarations: [CreateBrewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateBrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
