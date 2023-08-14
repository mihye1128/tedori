import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageHeadComponent } from './page-head.component';

describe('PageHeadComponent', () => {
  let component: PageHeadComponent;
  let fixture: ComponentFixture<PageHeadComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PageHeadComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
