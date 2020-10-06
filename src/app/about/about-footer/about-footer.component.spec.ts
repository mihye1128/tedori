import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFooterComponent } from './about-footer.component';

describe('AboutFooterComponent', () => {
  let component: AboutFooterComponent;
  let fixture: ComponentFixture<AboutFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutFooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
