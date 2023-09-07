import { TestBed } from '@angular/core/testing';

import { Shared3Service } from './shared3.service';

describe('Shared3Service', () => {
  let service: Shared3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Shared3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
