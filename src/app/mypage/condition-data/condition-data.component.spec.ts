import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionDataComponent } from './condition-data.component';

describe('ConditionDataComponent', () => {
  let component: ConditionDataComponent;
  let fixture: ComponentFixture<ConditionDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionDataComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
