import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsDatelsComponent } from './meals-datels.component';

describe('MealsDatelsComponent', () => {
  let component: MealsDatelsComponent;
  let fixture: ComponentFixture<MealsDatelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealsDatelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealsDatelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
