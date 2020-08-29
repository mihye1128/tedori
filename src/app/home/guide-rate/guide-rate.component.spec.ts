import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideRateComponent } from './guide-rate.component';

describe('GuideRateComponent', () => {
  let component: GuideRateComponent;
  let fixture: ComponentFixture<GuideRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GuideRateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
