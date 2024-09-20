import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RenewalInsuredPersonComponent } from './renewal-insured-person.component';

describe('RenewalInsuredPersonComponent', () => {
  let component: RenewalInsuredPersonComponent;
  let fixture: ComponentFixture<RenewalInsuredPersonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RenewalInsuredPersonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RenewalInsuredPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
