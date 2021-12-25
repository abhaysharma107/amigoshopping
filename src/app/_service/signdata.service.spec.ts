import { TestBed } from '@angular/core/testing';

import { SigndataService } from './signdata.service';

describe('SigndataService', () => {
  let service: SigndataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigndataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
