import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConditionCardResultComponent } from './condition-card-result.component';

describe('ConditionCardResultComponent', () => {
  let component: ConditionCardResultComponent;
  let fixture: ComponentFixture<ConditionCardResultComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ConditionCardResultComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionCardResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
