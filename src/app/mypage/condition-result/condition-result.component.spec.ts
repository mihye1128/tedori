import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionResultComponent } from './condition-result.component';

describe('ConditionResultComponent', () => {
  let component: ConditionResultComponent;
  let fixture: ComponentFixture<ConditionResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionResultComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
