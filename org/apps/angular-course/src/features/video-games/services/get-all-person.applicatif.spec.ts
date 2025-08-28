import { TestBed } from '@angular/core/testing';

import { GetAllPersonApplicatif } from './get-all-person.applicatif';

describe('GetAllPersonApplicatif', () => {
  let service: GetAllPersonApplicatif;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllPersonApplicatif);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
