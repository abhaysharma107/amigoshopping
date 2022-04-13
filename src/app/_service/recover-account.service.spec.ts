import { TestBed } from '@angular/core/testing';

import { RecoverAccountService } from './recover-account.service';

describe('RecoverAccountService', () => {
  let service: RecoverAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoverAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
