import { TestBed } from '@angular/core/testing';

import { SlideapiService } from './slideapi.service';

describe('SlideapiService', () => {
  let service: SlideapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlideapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
