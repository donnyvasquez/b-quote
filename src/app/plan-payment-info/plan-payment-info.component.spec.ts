import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlanPaymentInfoComponent } from './plan-payment-info.component';

describe('PlanPaymentInfoComponent', () => {
  let component: PlanPaymentInfoComponent;
  let fixture: ComponentFixture<PlanPaymentInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PlanPaymentInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanPaymentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
