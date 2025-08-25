import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVideoGame } from './add-video-game';

describe('AddVideoGame', () => {
  let component: AddVideoGame;
  let fixture: ComponentFixture<AddVideoGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVideoGame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVideoGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
