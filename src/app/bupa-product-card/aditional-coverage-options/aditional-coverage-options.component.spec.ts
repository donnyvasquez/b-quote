import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AditionalCoverageOptionsComponent } from './aditional-coverage-options.component';

describe('AditionalCoverageOptionsComponent', () => {
  let component: AditionalCoverageOptionsComponent;
  let fixture: ComponentFixture<AditionalCoverageOptionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AditionalCoverageOptionsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AditionalCoverageOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
