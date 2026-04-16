import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRight } from './footer-right';

describe('FooterRight', () => {
  let component: FooterRight;
  let fixture: ComponentFixture<FooterRight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterRight],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterRight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
