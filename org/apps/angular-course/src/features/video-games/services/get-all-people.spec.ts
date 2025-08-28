import { TestBed } from '@angular/core/testing';

import { GetAllPeople } from './get-all-people';

describe('GetAllPeople', () => {
  let service: GetAllPeople;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllPeople);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
