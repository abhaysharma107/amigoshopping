import { TestBed } from '@angular/core/testing';

import { OtpverifyService } from './otpverify.service';

describe('OtpverifyService', () => {
  let service: OtpverifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtpverifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
