import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeaturedBenefitsAccordionComponent } from './featured-benefits-accordion.component';

describe('FeaturedBenefitsAccordionComponent', () => {
  let component: FeaturedBenefitsAccordionComponent;
  let fixture: ComponentFixture<FeaturedBenefitsAccordionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FeaturedBenefitsAccordionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedBenefitsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
