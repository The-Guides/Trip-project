import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureLandingPageComponent } from './figure-landing-page.component';

describe('FigureLandingPageComponent', () => {
  let component: FigureLandingPageComponent;
  let fixture: ComponentFixture<FigureLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigureLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigureLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
