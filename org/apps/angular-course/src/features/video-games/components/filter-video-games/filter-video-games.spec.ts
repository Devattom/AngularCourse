import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterVideoGames } from './filter-video-games';

describe('FilterVideoGames', () => {
  let component: FilterVideoGames;
  let fixture: ComponentFixture<FilterVideoGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterVideoGames]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterVideoGames);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
