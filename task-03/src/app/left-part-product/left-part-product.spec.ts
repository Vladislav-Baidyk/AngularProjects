import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPartProduct } from './left-part-product';

describe('LeftPartProduct', () => {
  let component: LeftPartProduct;
  let fixture: ComponentFixture<LeftPartProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftPartProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftPartProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
