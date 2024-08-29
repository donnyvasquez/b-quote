import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InternationalBusinessQuoteComponent } from './international-business-quote.component';

describe('InternationalBusinessQuoteComponent', () => {
  let component: InternationalBusinessQuoteComponent;
  let fixture: ComponentFixture<InternationalBusinessQuoteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalBusinessQuoteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InternationalBusinessQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
