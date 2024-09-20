import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BusinessRenewalQuoteComponent } from './business-renewal-quote.component';

describe('BusinessRenewalQuoteComponent', () => {
  let component: BusinessRenewalQuoteComponent;
  let fixture: ComponentFixture<BusinessRenewalQuoteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BusinessRenewalQuoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessRenewalQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
