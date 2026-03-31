import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeCart } from './serve-cart';

describe('ServeCart', () => {
  let component: ServeCart;
  let fixture: ComponentFixture<ServeCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServeCart],
    }).compileComponents();

    fixture = TestBed.createComponent(ServeCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
