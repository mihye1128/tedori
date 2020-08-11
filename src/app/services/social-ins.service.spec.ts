import { TestBed } from '@angular/core/testing';

import { SocialInsService } from './social-ins.service';

describe('SocialInsService', () => {
  let service: SocialInsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialInsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
