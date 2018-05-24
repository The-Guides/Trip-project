import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureViewComponent } from './figure-view.component';

describe('FigureViewComponent', () => {
  let component: FigureViewComponent;
  let fixture: ComponentFixture<FigureViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigureViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
