import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainResultTableHeaderComponent } from './main-result-table-header.component';

describe('MainResultTableHeaderComponent', () => {
  let component: MainResultTableHeaderComponent;
  let fixture: ComponentFixture<MainResultTableHeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MainResultTableHeaderComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MainResultTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
