import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainResultOwnerComponent } from './main-result-owner.component';

describe('MainResultOwnerComponent', () => {
  let component: MainResultOwnerComponent;
  let fixture: ComponentFixture<MainResultOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainResultOwnerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainResultOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
