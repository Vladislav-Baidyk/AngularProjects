import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComp } from './form-comp';

describe('FormComp', () => {
  let component: FormComp;
  let fixture: ComponentFixture<FormComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComp],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
