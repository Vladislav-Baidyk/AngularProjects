import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridRight } from './grid-right';

describe('GridRight', () => {
  let component: GridRight;
  let fixture: ComponentFixture<GridRight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridRight],
    }).compileComponents();

    fixture = TestBed.createComponent(GridRight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
