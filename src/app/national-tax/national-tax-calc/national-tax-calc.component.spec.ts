import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalTaxCalcComponent } from './national-tax-calc.component';

describe('NationalTaxCalcComponent', () => {
  let component: NationalTaxCalcComponent;
  let fixture: ComponentFixture<NationalTaxCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NationalTaxCalcComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalTaxCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
