import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainResultWorkerComponent } from './main-result-worker.component';

describe('MainResultWorkerComponent', () => {
  let component: MainResultWorkerComponent;
  let fixture: ComponentFixture<MainResultWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainResultWorkerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainResultWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
