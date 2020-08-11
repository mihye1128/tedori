import { TestBed } from '@angular/core/testing';

import { NationalTaxService } from './national-tax.service';

describe('NationalTaxService', () => {
  let service: NationalTaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NationalTaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
