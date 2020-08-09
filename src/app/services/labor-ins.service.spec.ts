import { TestBed } from '@angular/core/testing';

import { LaborInsService } from './labor-ins.service';

describe('LaborInsService', () => {
  let service: LaborInsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaborInsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
