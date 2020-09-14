import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalTaxComponent } from './national-tax.component';

describe('NationalTaxComponent', () => {
  let component: NationalTaxComponent;
  let fixture: ComponentFixture<NationalTaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NationalTaxComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
