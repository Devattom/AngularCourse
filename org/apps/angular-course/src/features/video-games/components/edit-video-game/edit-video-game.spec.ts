import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVideoGame } from './edit-video-game';

describe('EditVideoGame', () => {
  let component: EditVideoGame;
  let fixture: ComponentFixture<EditVideoGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditVideoGame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVideoGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
