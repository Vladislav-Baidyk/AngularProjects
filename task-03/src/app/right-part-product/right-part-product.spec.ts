import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPartProduct } from './right-part-product';

describe('RightPartProduct', () => {
  let component: RightPartProduct;
  let fixture: ComponentFixture<RightPartProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightPartProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(RightPartProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
