import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStats } from './list-stats';

describe('ListStats', () => {
  let component: ListStats;
  let fixture: ComponentFixture<ListStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
