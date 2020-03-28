import { TestBed } from '@angular/core/testing';

import { CoronaService } from './corona.service';

describe('CoronaService', () => {
  let service: CoronaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
