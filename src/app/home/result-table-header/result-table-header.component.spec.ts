import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTableHeaderComponent } from './result-table-header.component';

describe('ResultTableHeaderComponent', () => {
  let component: ResultTableHeaderComponent;
  let fixture: ComponentFixture<ResultTableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultTableHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
