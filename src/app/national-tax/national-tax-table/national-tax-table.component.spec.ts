import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NationalTaxTableComponent } from './national-tax-table.component';

describe('NationalTaxTableComponent', () => {
  let component: NationalTaxTableComponent;
  let fixture: ComponentFixture<NationalTaxTableComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NationalTaxTableComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalTaxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
