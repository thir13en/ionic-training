import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestingModule } from '@testing/testing.module';
import { SetIngredientsPage } from './set-ingredients.page';


describe('SetIngredientsPage', () => {
  let component: SetIngredientsPage;
  let fixture: ComponentFixture<SetIngredientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule,
        IonicModule,
      ],
      declarations: [SetIngredientsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SetIngredientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
