import { TestBed } from '@angular/core/testing';

import { InsuranceScenariosService } from './insurance-scenarios.service';

describe('InsuranceScenariosService', () => {
  let service: InsuranceScenariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceScenariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
