import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BupaInsuredCarouselComponent } from './bupa-insured-carousel.component';

describe('BupaInsuredCarouselComponent', () => {
  let component: BupaInsuredCarouselComponent;
  let fixture: ComponentFixture<BupaInsuredCarouselComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BupaInsuredCarouselComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BupaInsuredCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
