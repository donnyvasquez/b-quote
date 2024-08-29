import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalSendBusinessPlanComponent } from './modal-send-business-plan.component';

describe('ModalSendBusinessPlanComponent', () => {
  let component: ModalSendBusinessPlanComponent;
  let fixture: ComponentFixture<ModalSendBusinessPlanComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSendBusinessPlanComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSendBusinessPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
