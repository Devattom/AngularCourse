import { TestBed } from '@angular/core/testing';

import { UpdateOneVideoGame } from './update-one-video-game';

describe('UpdateOneVideoGame', () => {
  let service: UpdateOneVideoGame;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateOneVideoGame);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
