import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BupaFieldOutputComponent } from './bupa-field-output.component';

describe('BupaFieldOutputComponent', () => {
  let component: BupaFieldOutputComponent;
  let fixture: ComponentFixture<BupaFieldOutputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BupaFieldOutputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BupaFieldOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
