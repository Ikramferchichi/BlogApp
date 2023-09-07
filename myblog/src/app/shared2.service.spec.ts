import { TestBed } from '@angular/core/testing';

import { Shared2Service } from './shared2.service';

describe('Shared2Service', () => {
  let service: Shared2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Shared2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
