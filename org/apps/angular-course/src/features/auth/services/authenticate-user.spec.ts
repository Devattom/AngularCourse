import { TestBed } from '@angular/core/testing';

import { AuthenticateUser } from './authenticate-user';

describe('AuthenticateUser', () => {
  let service: AuthenticateUser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticateUser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
