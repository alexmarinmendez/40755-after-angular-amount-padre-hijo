import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherAmountComponent } from './father-amount.component';

describe('FatherAmountComponent', () => {
  let component: FatherAmountComponent;
  let fixture: ComponentFixture<FatherAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatherAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
