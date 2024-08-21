import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PolicePlanCardComponent } from './police-plan-card.component';

describe('PolicePlanCardComponent', () => {
  let component: PolicePlanCardComponent;
  let fixture: ComponentFixture<PolicePlanCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PolicePlanCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PolicePlanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
