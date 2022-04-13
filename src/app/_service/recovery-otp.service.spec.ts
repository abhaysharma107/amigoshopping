import { TestBed } from '@angular/core/testing';

import { RecoveryOTPService } from './recovery-otp.service';

describe('RecoveryOTPService', () => {
  let service: RecoveryOTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoveryOTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
