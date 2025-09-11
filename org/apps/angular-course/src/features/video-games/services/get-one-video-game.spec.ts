import { TestBed } from '@angular/core/testing';

import { GetOneVideoGame } from './get-one-video-game';

describe('GetOneVideoGame', () => {
  let service: GetOneVideoGame;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOneVideoGame);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
