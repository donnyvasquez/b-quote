import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BupaQuoteProductCardLimitsComponent } from './bupa-quote-product-card-limits.component';

describe('BupaQuoteProductCardLimitsComponent', () => {
  let component: BupaQuoteProductCardLimitsComponent;
  let fixture: ComponentFixture<BupaQuoteProductCardLimitsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BupaQuoteProductCardLimitsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BupaQuoteProductCardLimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
