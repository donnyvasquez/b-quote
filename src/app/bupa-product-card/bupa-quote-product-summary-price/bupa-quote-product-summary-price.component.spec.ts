import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BupaQuoteProductSummaryPriceComponent } from './bupa-quote-product-summary-price.component';

describe('BupaQuoteProductSummaryPriceComponent', () => {
  let component: BupaQuoteProductSummaryPriceComponent;
  let fixture: ComponentFixture<BupaQuoteProductSummaryPriceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BupaQuoteProductSummaryPriceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BupaQuoteProductSummaryPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
