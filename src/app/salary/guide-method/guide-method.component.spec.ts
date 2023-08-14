import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GuideMethodComponent } from './guide-method.component';

describe('GuideMethodComponent', () => {
  let component: GuideMethodComponent;
  let fixture: ComponentFixture<GuideMethodComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [GuideMethodComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
