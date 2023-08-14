import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConditionCardDataComponent } from './condition-card-data.component';

describe('ConditionCardDataComponent', () => {
  let component: ConditionCardDataComponent;
  let fixture: ComponentFixture<ConditionCardDataComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ConditionCardDataComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionCardDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
